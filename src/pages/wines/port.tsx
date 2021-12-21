import type { NextPage } from "next";
import { Error, Loading, WineCard } from "../../components";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

const PortWinePage: NextPage = () => {
  const name = 'port';
  const { data, error } = useWineData(name)

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <div>
      <h1>Wine</h1>
      <main>
        {data.map((wineData: Wine) => {
          return (
            <WineCard
              key={`port-wine-list-${wineData.id}`}
              wineData={wineData}
            />
          )
        })}
      </main>
    </div>
  )
}

export default PortWinePage;




/* Next.js에서 ServerSideRendering을 위해서 데이터를 미리 불러오는 함수
export async function getServerSideProps() {
  데이터 불러오는 부분 복붙
  const { data, error } = useSWR('https://api.sampleapis.com/wines/port', fetcher);


    return { props: { data, error } }
}

export default WinePage; */