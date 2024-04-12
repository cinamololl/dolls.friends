const NameSpace = () => {
  return(
    <>
      <div className={'rounded-2xl border shadow-2xl w-[500px] m-5'}>
        <div className={'flex flex-row justify-start align-bottom'}>
          <div>이름 여덟글자까지</div>
          <p>@x아이디</p>
        </div>
        <div className={'flex flex-row'}>
          <div>이미지</div>
          <div className={`flex flex-col`}>
            <div>
              <div>나이</div>
              <div className={`flex flex-row`}>
                <p>어저구</p>
                <p>저저구</p>
                <p>비공개</p>
              </div>
            </div>
            <div>
              <div>본진 언급</div>
              <div className={`flex flex-row`}>
                <p>언급해요</p>
                <p>언급 안해요</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NameSpace;