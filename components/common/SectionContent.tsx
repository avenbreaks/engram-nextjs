import markdownToHtml from "lib/markdownToHtml";
import * as React from "react";
import { useEffect, useState } from "react";
import { cx } from "utils";

type SectionContentProps = {
  content?: string;
  className?: string;
  fullWidth?: boolean;
  markdown?: boolean;
};

const SectionContent: React.FC<SectionContentProps> = ({
  content = "",
  className = "",
  fullWidth = false,
  markdown = true,
}) => {
  const [md, setMd] = useState(content);

  useEffect(() => {
    if (!markdown) {
      setMd(content);
      return;
    }

    markdownToHtml(content).then((html) => {
      setMd(html);
    });
  }, []);

  if (content.length === 0) {
    return null;
  }

  return (
    <div
      className={cx(
        "prose prose-sm leading-[20px] md:leading-[26px] md:prose-lg",
        className,
        fullWidth ? "w-full max-w-none" : "max-w-xl"
      )}
      style={{ orphans: 3, widows: 3 }}
      dangerouslySetInnerHTML={{
        __html: md,
      }}
    />
  );
};

export default SectionContent;
