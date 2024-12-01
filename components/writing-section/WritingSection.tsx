import { SectionHeader } from "../section-header/SectionHeader"
import { WritingHolder } from "../writing-holder/WritingsHolder"

export const WritingSection = () => {
	return (
		<div>
			<SectionHeader title="Writing" />
			<div className="flex flex-col gap-8">
				<WritingHolder title="My Journey with Vim and Vim Motion: Why You Should Begin Yours Today" image="/vim.jpg" link="https://aakash018.hashnode.dev/my-journey-with-vim-and-vim-motion-why-you-should-begin-yours-today" />
				<WritingHolder title="Why Linux Isn’t for Everyone—But It Could Be Perfect for You" image="/linux.jpg" link="https://aakash018.hashnode.dev/why-linux-isnt-for-everyonebut-it-could-be-perfect-for-you?source=more_articles_bottom_blogs" />
			</div>
		</div>
	)
}
