interface AnchorProps {
  Href: string;
  Text: string;
  Class?: string; // Optional class name
}
function Anchor({Href, Text, Class}: AnchorProps) {
  return (
    <a className={Class} href={Href}>{Text}</a>
  )
}

export default Anchor;
