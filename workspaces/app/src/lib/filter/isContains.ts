// import { compareWithFlags, PRIMARY as UCA_L1_FLAG, SECONDARY as UCA_L2_FLAG } from 'unicode-collation-algorithm2';

// UCA_L1_FLAG はベース文字、UCA_L2_FLAG は濁点・半濁点・アクセントを区別する (sensitivity: accent に相当)
// const SENSITIVITY_ACCENT_FLAG = UCA_L1_FLAG ^ UCA_L2_FLAG;

type Params = {
  query: string;
  target: string;
};

// https://qiita.com/mimoe/items/855c112625d39b066c9a
const kanaToHira = (str: string) => {
  return str.replace(/[\u30a1-\u30f6]/g, function (match: string) {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
};

export function isContains({ query, target }: Params): boolean {
  return kanaToHira(target).normalize('NFKC').toUpperCase().includes(kanaToHira(query).normalize('NFKC').toUpperCase());
}
