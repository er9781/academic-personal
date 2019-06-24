import * as c from "common";
import _ from "lodash";

export interface Config {
  url: string;
  icon: string;
  label: string;
  title?: string;
}

// icons must be one of: https://ant.design/components/icon/
// TODO simon. Make the urls be sources from the frontmatter in the md files where possible :thinking:.
export const routes = [
  ["index", { icon: "pie-chart", label: "Home", url: "/", title: "Home" }],
  ["research", { icon: "line-chart", label: "Research", url: "/research" }],
  ["publications", { icon: "book", label: "Publications", url: "/publications" }],
];

export const getTitle = config => config.title || config.label;

const isCurrent = (curPath: string, to: string): boolean => {
  const path = curPath.length > 1 && curPath.endsWith("/") ? curPath.slice(0, -1) : curPath;
  return path === to;
};

export const curNames = (pathname): string[] => {
  return routes
    .filter(([name, config]) => {
      return isCurrent(pathname, (config as Config).url);
    })
    .map(c.first);
};

export const curConfig = (pathname): Config => {
  return routes.map(c.second).filter(({ url }) => isCurrent(pathname, url))[0];
};
