import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, isDarkMode, cx }) => {
  const scheme = isDarkMode
    ? css`
        --color-prettylights-syntax-comment: #8b949e;
        --color-prettylights-syntax-constant: #79c0ff;
        --color-prettylights-syntax-entity: #d2a8ff;
        --color-prettylights-syntax-storage-modifier-import: #c9d1d9;
        --color-prettylights-syntax-entity-tag: #7ee787;
        --color-prettylights-syntax-keyword: #ff7b72;
        --color-prettylights-syntax-string: #a5d6ff;
        --color-prettylights-syntax-variable: #ffa657;
        --color-prettylights-syntax-brackethighlighter-unmatched: #f85149;
        --color-prettylights-syntax-invalid-illegal-text: #f0f6fc;
        --color-prettylights-syntax-invalid-illegal-bg: #8e1519;
        --color-prettylights-syntax-carriage-return-text: #f0f6fc;
        --color-prettylights-syntax-carriage-return-bg: #b62324;
        --color-prettylights-syntax-string-regexp: #7ee787;
        --color-prettylights-syntax-markup-list: #f2cc60;
        --color-prettylights-syntax-markup-heading: #1f6feb;
        --color-prettylights-syntax-markup-italic: #c9d1d9;
        --color-prettylights-syntax-markup-bold: #c9d1d9;
        --color-prettylights-syntax-markup-deleted-text: #ffdcd7;
        --color-prettylights-syntax-markup-deleted-bg: #67060c;
        --color-prettylights-syntax-markup-inserted-text: #aff5b4;
        --color-prettylights-syntax-markup-inserted-bg: #033a16;
        --color-prettylights-syntax-markup-changed-text: #ffdfb6;
        --color-prettylights-syntax-markup-changed-bg: #5a1e02;
        --color-prettylights-syntax-markup-ignored-text: #c9d1d9;
        --color-prettylights-syntax-markup-ignored-bg: #1158c7;
        --color-prettylights-syntax-meta-diff-range: #d2a8ff;
        --color-prettylights-syntax-brackethighlighter-angle: #8b949e;
        --color-prettylights-syntax-sublimelinter-gutter-mark: #484f58;
        --color-prettylights-syntax-constant-other-reference-link: #a5d6ff;
        --color-fg-default: #c9d1d9;
        --color-fg-muted: #8b949e;
        --color-fg-subtle: #6e7681;
        --color-canvas-default: #0d1117;
        --color-canvas-subtle: #161b22;
        --color-border-default: #30363d;
        --color-border-muted: #21262d;
        --color-neutral-muted: rgba(110, 118, 129, 40%);
        --color-accent-fg: #58a6ff;
        --color-accent-emphasis: #1f6feb;
        --color-attention-subtle: rgba(187, 128, 9, 15%);
        --color-danger-fg: #f85149;

        color-scheme: dark;
      `
    : css`
        --color-prettylights-syntax-comment: #6e7781;
        --color-prettylights-syntax-constant: #0550ae;
        --color-prettylights-syntax-entity: #8250df;
        --color-prettylights-syntax-storage-modifier-import: #24292f;
        --color-prettylights-syntax-entity-tag: #116329;
        --color-prettylights-syntax-keyword: #cf222e;
        --color-prettylights-syntax-string: #0a3069;
        --color-prettylights-syntax-variable: #953800;
        --color-prettylights-syntax-brackethighlighter-unmatched: #82071e;
        --color-prettylights-syntax-invalid-illegal-text: #f6f8fa;
        --color-prettylights-syntax-invalid-illegal-bg: #82071e;
        --color-prettylights-syntax-carriage-return-text: #f6f8fa;
        --color-prettylights-syntax-carriage-return-bg: #cf222e;
        --color-prettylights-syntax-string-regexp: #116329;
        --color-prettylights-syntax-markup-list: #3b2300;
        --color-prettylights-syntax-markup-heading: #0550ae;
        --color-prettylights-syntax-markup-italic: #24292f;
        --color-prettylights-syntax-markup-bold: #24292f;
        --color-prettylights-syntax-markup-deleted-text: #82071e;
        --color-prettylights-syntax-markup-deleted-bg: #ffebe9;
        --color-prettylights-syntax-markup-inserted-text: #116329;
        --color-prettylights-syntax-markup-inserted-bg: #dafbe1;
        --color-prettylights-syntax-markup-changed-text: #953800;
        --color-prettylights-syntax-markup-changed-bg: #ffd8b5;
        --color-prettylights-syntax-markup-ignored-text: #eaeef2;
        --color-prettylights-syntax-markup-ignored-bg: #0550ae;
        --color-prettylights-syntax-meta-diff-range: #8250df;
        --color-prettylights-syntax-brackethighlighter-angle: #57606a;
        --color-prettylights-syntax-sublimelinter-gutter-mark: #8c959f;
        --color-prettylights-syntax-constant-other-reference-link: #0a3069;
        --color-fg-default: #24292f;
        --color-fg-muted: #57606a;
        --color-fg-subtle: #6e7781;
        --color-canvas-default: #fff;
        --color-canvas-subtle: #f6f8fa;
        --color-border-default: #d0d7de;
        --color-border-muted: hsla(210deg, 18%, 87%, 100%);
        --color-neutral-muted: rgba(175, 184, 193, 20%);
        --color-accent-fg: #0969da;
        --color-accent-emphasis: #0969da;
        --color-attention-subtle: #fff8c5;
        --color-danger-fg: #cf222e;

        color-scheme: light;
      `;
  return {
    container: css`
      position: relative;
      overflow: hidden;
    `,
    markdown: cx(
      'markdown-body',
      css`
        position: relative;
        height: 100%;
        padding: 24px;

        [align='center'] {
          text-align: center !important;

          p {
            text-align: center !important;
          }
        }

        [align='right'] {
          text-align: right !important;

          p {
            text-align: right !important;
          }
        }
      `,
    ),
    scheme,
  };
});
