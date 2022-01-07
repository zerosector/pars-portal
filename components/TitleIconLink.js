import { Center } from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";

function TitleIconLink({ caption, iconName, href }) {
  const lordE = useRef(null);

  const handleMouseEnterEvent = () => {
    const mouseEnterEvent = new Event("mouseenter");
    lordE.current.dispatchEvent(mouseEnterEvent);
  };
  return (
    <Link href={href}>
      <a onMouseEnter={handleMouseEnterEvent}>
        <Center>
          <span>{caption}</span>
          <lord-icon
            src={`/icons/${iconName}.json`}
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: "52px", height: "52px" }}
            ref={lordE}
          />
        </Center>
      </a>
    </Link>
  );
}

export default TitleIconLink;
