import Subject from "../../components/topic/Subject"
import SUBJECT_LIST from "../../constant/subjects/subjectList"
import SearchBar from "../../components/functions/SearchBar"

export default function Resources() {
    return (
        <>
            <SearchBar />
            <div className="flex flex-col gap-2 mx-2">
                {SUBJECT_LIST?.map((subject) =>
                    <Subject title={subject.subject} contents={subject.contents} key={subject.id} />
                )}
            </div>
        </>
    )
}