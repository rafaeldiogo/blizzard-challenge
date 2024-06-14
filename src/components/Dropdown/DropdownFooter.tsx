import { mapGamesFooter } from "../../utils/mapGamesFooter";

import iconTournament from "../../assets/dropdown/icons/icon-tournament.svg";

type DropdownFooterProps = {
  name?: string;
};

const DropdownFooter = ({ name }: DropdownFooterProps) => {
  return (
    <nav>
      <ul className="flex items-center justify-center text-white gap-16 h-[70px] bg-[#15171B]">
        {name === "Jogos" && (
          <>
            {mapGamesFooter.map((content) => (
              <li key={content.text}>
                <a href="/" className="flex gap-[10px]">
                  <img src={content.icon} alt={content.alt} />
                  <p>{content.text}</p>
                </a>
              </li>
            ))}
          </>
        )}
        {name === "Esportes" && (
          <li>
            <a href="/" className="flex gap-[10px]">
              <img src={iconTournament} alt="icon-tournament" />
              <p>Torneios da comunidade</p>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default DropdownFooter;
