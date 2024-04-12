const array = ['글', '그림', '도안 그리기', '개인제작', '공구', '게임', '커미션', '인형정보', '사담 및 교류']

const InterestSpace = () => {
  return(
    <>
      <div className={'rounded-2xl border shadow-2xl w-[500px] m-5'}>
        <div>저는 이런것들을 해요</div>
        <div>
          {array.map((arr, i) => (
            <p key={i}>{arr}</p>
          ))}
        </div>
      </div>
    </>
  )
}
export default InterestSpace;