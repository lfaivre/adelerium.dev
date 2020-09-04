export interface TLink {
  text: string;
  url: string;
}

export interface TProfile {
  name: string;
  tag: string;
}

export interface TSiteLinks {
  kd: TLink;
  github: TLink;
  linkedin: TLink;
  resume: TLink;
  email: TLink;
}

export interface TSiteData {
  profile: TProfile;
  links: TSiteLinks;
}
