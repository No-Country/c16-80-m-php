interface AnchorProps {
  Href: string;
  Text: string;
  Class?: string;
  eventClick?: () => void; // Optional class name
}
function Anchor({Href, Text, Class,eventClick}: AnchorProps) {
  return (
    <a className={Class} href={Href} onClick={eventClick}>{Text}</a>
  )
}

export default Anchor;
