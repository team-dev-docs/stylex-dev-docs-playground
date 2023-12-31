import stylex from "@stylexjs/stylex";
import { globalTokens as $, spacing, text } from "./globalTokens.stylex";

type Props = Readonly<{
  title: string;
  body: string;
  href: string;
}>;

export default function Card({ title, body, href }: Props) {
  return (
    <a
      href={href}
      className={stylex(styles.container)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={stylex(styles.h2)}>
        {title} <span className={stylex(styles.span)}>→</span>
      </h2>
      <p className={stylex(styles.p)}>{body}</p>
    </a>
  );
}

const MOBILE = "@media (max-width: 700px)";
const REDUCE_MOTION = "@media (prefers-reduced-motion: reduce)";

const styles = stylex.create({
  container: {
    display: {
      default: "flex",
      [MOBILE]: "block",
    },
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderRadius: spacing.xs,
    backgroundColor: {
      default: `rgba(${$.cardR}, ${$.cardG}, ${$.cardB}, 0)`,
      ":hover": `rgba(${$.cardR}, ${$.cardG}, ${$.cardB}, 0.1)`,
    },
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: {
      default: `rgba(${$.cardBorderR}, ${$.cardBorderG}, ${$.cardBorderB}, 0)`,
      ":hover": `rgba(${$.cardBorderR}, ${$.cardBorderG}, ${$.cardBorderB}, 0.1)`,
    },
    fontFamily: $.fontSans,
    padding: spacing.sm,
    // eslint-disable-next-line @stylexjs/valid-styles
    transitionProperty: "background, border",
    transitionDuration: "200ms",
    transform: {
      default: "translateX(0)",
      ":hover span": "translateX(4px)",
    },
    textAlign: "center",
  },
  h2: {
    fontSize: text.h4,
    fontWeight: 600,
    marginBottom: {
      default: spacing.xs,
      [MOBILE]: spacing.xxs,
    },
  },
  span: {
    display: "inline-block",
    transitionProperty: "transform",
    transitionDuration: {
      default: "200ms",
      [REDUCE_MOTION]: "0s",
    },
  },
  p: {
    margin: 0,
    opacity: 0.6,
    fontSize: text.p,
    textWrap: "balance",
    lineHeight: 1.5,
    maxWidth: "30ch",
  },
});
