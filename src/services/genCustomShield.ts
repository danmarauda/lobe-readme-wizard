import { identity, pickBy } from 'lodash-es';
import qs from 'query-string';
import urlJoin from 'url-join';

import { SHIELD_BADGE_URL, SHIELD_URL } from '@/const/url';
import { ShieldsBaseOptions } from '@/types/shields';
import { formatCustomLabel } from '@/utils/formatCustomLabel';
import { genShield } from '@/utils/genShield';

interface CustomSingleShieldOptions extends ShieldsBaseOptions {
  label: string;
}

export const genCustomSingleShield = (options: CustomSingleShieldOptions) => {
  const { link, label, color, ...config } = options;
  const url = qs.stringifyUrl({
    query: pickBy(config, identity) as any,
    url: urlJoin(
      SHIELD_BADGE_URL,
      formatCustomLabel({
        color: color as string,
        label,
      }),
    ),
  });

  return genShield(label, url, link);
};

interface CustomDoubleShieldOptions extends ShieldsBaseOptions {
  content: string;
  label: string;
}

export const genCustomDoubleShield = (options: CustomDoubleShieldOptions) => {
  const { content, link, label, color, ...config } = options;
  const url = qs.stringifyUrl({
    query: pickBy(config, identity) as any,
    url: urlJoin(
      SHIELD_BADGE_URL,
      formatCustomLabel({
        color: color as string,
        content,
        label,
      }),
    ),
  });

  return genShield(content || label, url, link);
};

interface WebsiteShieldOptions extends ShieldsBaseOptions {
  down_message: string;
  label: string;
  up_message: string;
  url: string;
}

export const genWebsiteShield = (options: WebsiteShieldOptions) => {
  const url = qs.stringifyUrl({
    query: pickBy(options, identity) as any,
    url: urlJoin(SHIELD_URL, 'website'),
  });

  return genShield(options.label, url, options.url);
};

interface DiscordShieldOptions extends ShieldsBaseOptions {
  label: string;
  serverId: string;
}

export const genDiscordShield = (options: DiscordShieldOptions) => {
  const { serverId, link, ...config } = options;
  const query = pickBy(config, identity) as any;
  const url = qs.stringifyUrl({
    query: { logo: 'discord', ...query },
    url: urlJoin(SHIELD_URL, 'discord', String(serverId)),
  });

  return genShield('discord', url, link);
};

interface BilibiliShieldOptions extends ShieldsBaseOptions {
  label: string;
  uid: string;
}

export const genBilibiliShield = (options: BilibiliShieldOptions) => {
  const { uid, labelColor, logoColor, ...config } = options;
  const query = pickBy(config, identity) as any;
  const url = qs.stringifyUrl({
    query: {
      label_color: labelColor,
      logo_color: logoColor,
      uid,
      ...query,
    },
    url: 'https://bilistats.lonelyion.com/followers',
  });
  const link = urlJoin('https://space.bilibili.com', uid);

  return genShield('bilibili', url, link);
};
