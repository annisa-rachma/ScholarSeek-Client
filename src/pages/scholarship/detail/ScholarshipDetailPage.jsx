import BookmarkButton from '../../../components/buttons/BookmarkButton'
import InfoTable from '../../../components/InfoTable'
import PageContainer from '../../../components/PageContainer'
import HeaderInfo from './HeaderInfo'

export default function ScholarshipDetailPage() {
   function addBookMark() {
      alert('Scholarship bookmarked!')
   }
   return (
      <PageContainer>
         <div className="flex justify-between items-start">
            <HeaderInfo />
            <div className="mt-5 md:mt-10">
               <BookmarkButton
                  className={'text-4xl md:text-5xl'}
                  onClick={addBookMark}
               />
            </div>
         </div>
         <InfoTable className="mt-6" />
      </PageContainer>
   )
}
