const Line = ({
  line,
  text,
  isEntity,
  entityName,
  isContructor,
  hasAttribute,
  attribute,
}: {
  line: number;
  text?: string;
  isEntity?: boolean;
  entityName?: string;
  isContructor?: boolean;
  constructorText?: string;
  hasAttribute?: boolean;
  attribute?: string;
  isVariable?: boolean;
}) => {
  return (
    <div className="flex  gap-4 divide-x divide-ide-100 text-base xl:text-lg font-mono">
      <span className="text-ide-line pl-4">{line}</span>
      {isEntity ? (
        <div className="flex gap-2 pl-4 font-semibold">
          <span className="text-ide-keyword ">{text}</span>
          <span className="text-ide-entity">{entityName}</span>
          <span className="text-ide-text font-normal">{"{"}</span>
        </div>
      ) : isContructor ? (
        <div className="flex pl-8">
          <span className="text-ide-special">{text}</span>
          <span className="text-ide-text">{"("}</span>
          <span className="text-ide-text">{") {"}</span>
        </div>
      ) : hasAttribute ? (
        <div className="flex pl-12 ">
          <span className="text-ide-tag">this</span>
          <span className="text-ide-markup">.</span>
          <span className="text-ide-text">{attribute}</span>
          <span className="text-ide-markup ml-2">=</span>
          <span className="ml-2 text-ide-string">{text}</span>
        </div>
      ) : line === 8 ? (
        <div>
          <span className="pl-8">{"}"}</span>
        </div>
      ) : (
        <div>
          <span className="pl-4">{"}"}</span>
        </div>
      )}
    </div>
  );
};

export default Line;
