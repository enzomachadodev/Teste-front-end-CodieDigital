import Image from "next/image";
import { Button } from "../button";
import * as S from "./header-styles";
import { Logo } from "../logo";
import Link from "next/link";

export const Header: React.FC = () => {
	return (
		<S.Header>
			<S.Container>
				<Logo />
				<S.Nav>
					<Link href={"/quem-somos"}>
						<Button variant="ghost">Quem somos</Button>
					</Link>
					<Link href={"/agendar-consulta"}>
						<Button>Agendar Consulta</Button>
					</Link>
				</S.Nav>
			</S.Container>
		</S.Header>
	);
};

