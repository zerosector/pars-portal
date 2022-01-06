import { Center } from "@chakra-ui/react";
import Link from "next/link";

function TitleIconLink({ caption, iconName, href }) {
  return (
    <Link href={href}>
      <a>
        <Center>
          <span>{caption}</span>
          <lord-icon
            src={`/icons/${iconName}.json`}
            trigger="hover"
            colors="primary:#121331,secondary:#08a88a"
            style={{ width: "52px", height: "52px" }}
          />
        </Center>
      </a>
    </Link>
  );
}

export default TitleIconLink;
