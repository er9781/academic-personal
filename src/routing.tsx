import _ from "lodash";

// label, icon
export const routes: { [name: string]: { url: string; icon: string; label: string } } = {
  index: { icon: "pie-chart", label: "Home", url: "/" },
  page2: { icon: "desktop", label: "Talks", url: "/page-2" },
};

const isCurrent = (curPath: string, to: string): boolean => {
  const path = curPath.length > 1 && curPath.endsWith("/") ? curPath.slice(0, -1) : curPath;
  return path === to;
};

export const curUrls = (pathname): string[] => {
  return Object.keys(routes).filter(name => {
    return isCurrent(pathname, routes[name].url);
  });
};
