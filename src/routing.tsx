import _ from "lodash";

interface Config {
  url: string;
  icon: string;
  label: string;
  title: string;
}


// icons must be one of: https://ant.design/components/icon/
export const routes: { [name: string]: Config } = {
  index: { icon: "pie-chart", label: "Home", url: "/", title: "Home" },
  research: { icon: "line-chart", label: "Research", url: "/research", title: "Research" },
};

const isCurrent = (curPath: string, to: string): boolean => {
  const path = curPath.length > 1 && curPath.endsWith("/") ? curPath.slice(0, -1) : curPath;
  return path === to;
};

export const curNames = (pathname): string[] => {
  return Object.keys(routes).filter(name => {
    return isCurrent(pathname, routes[name].url);
  });
};

export const curConfig = (pathname): Config => {
  return Object.values(routes).filter(({ url }) => isCurrent(pathname, url))[0];
};
