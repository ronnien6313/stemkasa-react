import type { Icon } from "@phosphor-icons/react/dist/lib/types";
import { BookIcon } from "@phosphor-icons/react/dist/ssr/Book";
import { ChartBarIcon } from "@phosphor-icons/react/dist/ssr/ChartBar";
import { ChatCenteredDotsIcon } from "@phosphor-icons/react/dist/ssr/ChatCenteredDots";
import { GearSixIcon } from "@phosphor-icons/react/dist/ssr/GearSix";
import { ListChecksIcon } from "@phosphor-icons/react/dist/ssr/ListChecks";
import { ListDashesIcon } from "@phosphor-icons/react/dist/ssr/ListDashes";
import { PaletteIcon } from "@phosphor-icons/react/dist/ssr/Palette";
import { PencilRulerIcon } from "@phosphor-icons/react/dist/ssr/PencilRuler";
import { QuotesIcon } from "@phosphor-icons/react/dist/ssr/Quotes";
import { RobotIcon } from "@phosphor-icons/react/dist/ssr/Robot";
import { SealQuestionIcon } from "@phosphor-icons/react/dist/ssr/SealQuestion";
import { SmileyIcon } from "@phosphor-icons/react/dist/ssr/Smiley";
import { UserIcon } from "@phosphor-icons/react/dist/ssr/User";
import { XSquare } from "@phosphor-icons/react/dist/ssr/XSquare";

export const navIcons = {
	book: BookIcon,
	listChecks: ListChecksIcon,
	chartBar: ChartBarIcon,
	quotes: QuotesIcon,
	sealQuestion: SealQuestionIcon,
	listDashes: ListDashesIcon,
	palette: PaletteIcon,
	Smiley: SmileyIcon,
	robot: RobotIcon,
	"gear-six": GearSixIcon,
	pencilruler: PencilRulerIcon,
	"x-square": XSquare,
	user: UserIcon,
	ChatCenteredDots: ChatCenteredDotsIcon,
} as Record<string, Icon>;
