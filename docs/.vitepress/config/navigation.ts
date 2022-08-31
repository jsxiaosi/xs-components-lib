import glob from 'fast-glob';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { vpRoot } from '../utils/paths';

type Item = {
  text: string;
  items?: Item[];
  link?: string;
};

const handleSidebars = () => {
  const file = glob.sync('*.json', {
    cwd: resolve(vpRoot, 'navigation', 'sidebar'),
    absolute: true,
    objectMode: true,
  });

  let sidebars = {};

  file.forEach((i) => {
    const content = JSON.parse(readFileSync(i.path, 'utf-8'));
    const newContent = Object.fromEntries(
      Object.keys(content).map((i) => {
        return [i, content[i].map((item: Item) => handlePrefix(item, i))];
      }),
    );
    sidebars = Object.assign(sidebars, newContent);
  });

  return sidebars;
};

const handlePrefix = (item: Item, key: string) => {
  if (item.items && item.items.length > 0) {
    return {
      ...item,
      items: item.items.map((child) => handlePrefix(child, key)),
    };
  }

  return {
    ...item,
    link: `${key}${item.link}`,
  };
};

export const sidebar = handleSidebars();
