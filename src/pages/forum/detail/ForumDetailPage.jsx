import PageContainer from "../../../components/PageContainer"
import DiscussionCard from "../../../components/cards/DiscussionCard"
import DiscussionCardProps from "../../../data/discussionCardProp.json"

export default function ForumDetailPage() {
    return (
        <PageContainer className="flex flex-col gap-6">
            <DiscussionCard {...DiscussionCardProps} />
        </PageContainer>
    )
}
