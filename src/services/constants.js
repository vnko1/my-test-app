const PAGELIMIT = 6;

const QUERYTYPE = {
  all: { title: "all", mode: "" },
  follow: {
    title: "follow",
    mode: "&filter=false",
  },
  following: {
    title: "following",
    mode: "&filter=true",
  },
};

export { PAGELIMIT, QUERYTYPE };
