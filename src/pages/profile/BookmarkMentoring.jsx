import PageContainer from "../../components/PageContainer"
import MentoringCard from "../../components/cards/MentoringCard"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBookmarkMentoring } from "../../stores/actions/actionBookmark"
import Loading from "../../components/Loading"
import { fetchUserDetail } from "../../stores/actions/actionUser"
import Button from "../../components/Button"
import AddMentoringPopup from "../../components/AddMentoringPopup"
import NoDataSad from "../../components/NoDataSad"

export default function BookmarkMentoring() {
    const [loading, setLoading] = useState(false)
    const mentoring = useSelector((state) => {
        return state.bookmarkReducer.bookmarkMentoring
    })
    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            setLoading(true)
            await dispatch(fetchBookmarkMentoring())
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const user = useSelector((state) => {
        return state.user
    })

    const fetchDataUser = async () => {
        try {
            setLoading(true)
            await dispatch(fetchUserDetail(user.slug))
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDataUser()
    }, [])

    const [showAddMentoring, setShowAddMentoring] = useState(false)
    const handleOnClose = () => setShowAddMentoring(false)

    return (
        <>
            <PageContainer className={`flex flex-col gap-4 mt-4`}>
                {user.role == "awardee" && (
                    <div className="flex justify-end ">
                        <Button
                            onClick={() => {
                                setShowAddMentoring(true)
                            }}
                            className={
                                "bg-primary text-white hover:bg-[#2e4cc5]"
                            }
                        >
                            Add new session
                        </Button>
                    </div>
                )}
                {loading ? (
                    <Loading className="flex-[1]" />
                ) : mentoring.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mentoring?.map((mentoring, i) => (
                            <MentoringCard key={i} {...mentoring} />
                        ))}
                    </div>
                ) : (
                    <NoDataSad />
                )}
                <AddMentoringPopup
                    onClose={handleOnClose}
                    visible={showAddMentoring}
                />
            </PageContainer>
        </>
    )
}
