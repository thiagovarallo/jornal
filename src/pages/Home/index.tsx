import NewsEmphasis from "../../components/NewsEmphasis";
import {TopicsSection} from "../../components/TopicsSection";

export default function Home () {
    return (
        <>
            <NewsEmphasis />
            <TopicsSection subject="Business"/>
            <TopicsSection subject="Sport"/>

        </>
    )
}