type RealScoutSimpleSearchProps = {
  agentEncodedId: string;
  className?: string;
};

/** Simple search widget markup — pair with RealScoutScript in layout. */
export function RealScoutSimpleSearch({
  agentEncodedId,
  className = "",
}: RealScoutSimpleSearchProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: `<realscout-simple-search agent-encoded-id="${agentEncodedId}"></realscout-simple-search>`,
      }}
    />
  );
}