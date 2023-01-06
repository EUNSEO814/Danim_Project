function DiaryTitle() {
  return (
    <div className="relative flex flex-row content-center justify-between mb-[40px]">
      <div className="inputContainer w-[380px] h-[55px]">
        <input className="outline-none w-full text-custom-text-gray font-shinb text-[16px]" />
      </div>
      <div className="inputContainer w-[280px]">
        <div className="flex">
          <select className="dateArea scrollbar-hide">
            <option className="options " value="">
              {" "}
              ----
            </option>
            <option className="options " value="2023">
              2023
            </option>
            <option className="options " value="2022">
              2022
            </option>
            <option className="options" value="2021">
              2021
            </option>
            <option className="options" value="2020">
              2020
            </option>
            <option className="options" value="2019">
              2019
            </option>
            <option className="options" value="2018">
              2018
            </option>
            <option className="options" value="2017">
              2017
            </option>
            <option className="options" value="2016">
              2016
            </option>
            <option className="options" value="2015">
              2015
            </option>
            <option className="options" value="2014">
              2014
            </option>
            <option className="options" value="2013">
              2013
            </option>
            <option className="options" value="2012">
              2012
            </option>
            <option className="options" value="2011">
              2011
            </option>
            <option className="options" value="2010">
              2010
            </option>
            <option className="options" value="2009">
              2009
            </option>
            <option className="options" value="2008">
              2008
            </option>
            <option className="options" value="2007">
              2007
            </option>
            <option className="options" value="2006">
              2006
            </option>
            <option className="options" value="2005">
              2005
            </option>
            <option className="options" value="2004">
              2004
            </option>
            <option className="options" value="2003">
              2003
            </option>
            <option className="options" value="2002">
              2002
            </option>
            <option className="options" value="2001">
              2001
            </option>
            <option className="options" value="2000">
              2000
            </option>
          </select>
          <div className="relative font-shinb text-[16px]">년</div>
        </div>
        <div className="flex">
          <select className="dateArea">
            <option className="options" value="">
              --
            </option>
            <option className="options" value="12">
              12
            </option>
            <option className="options" value="11">
              11
            </option>
            <option className="options" value="10">
              10
            </option>
            <option className="options" value="09">
              09
            </option>
            <option className="options" value="08">
              08
            </option>
            <option className="options" value="07">
              07
            </option>
            <option className="options" value="06">
              06
            </option>
            <option className="options" value="05">
              05
            </option>
            <option className="options" value="04">
              04
            </option>
            <option className="options" value="03">
              03
            </option>
            <option className="options" value="02">
              02
            </option>
            <option className="options" value="01">
              01
            </option>
          </select>
          <div className="relative font-shinb text-[16px]">월</div>
        </div>
        <div className="flex">
          <select className="dateArea scrollbar-hide">
            <option className="options" value="">
              --
            </option>
            <option className="options" value="31">
              31
            </option>
            <option className="options" value="30">
              30
            </option>
            <option className="options" value="29">
              29
            </option>
            <option className="options" value="28">
              28
            </option>
            <option className="options" value="27">
              27
            </option>
            <option className="options" value="26">
              26
            </option>
            <option className="options" value="25">
              25
            </option>
            <option className="options" value="24">
              24
            </option>
            <option className="options" value="23">
              23
            </option>
            <option className="options" value="22">
              22
            </option>
            <option className="options" value="21">
              21
            </option>
            <option className="options" value="20">
              20
            </option>
            <option className="options" value="19">
              19
            </option>
            <option className="options" value="18">
              18
            </option>
            <option className="options" value="17">
              17
            </option>
            <option className="options" value="16">
              16
            </option>
            <option className="options" value="15">
              15
            </option>
            <option className="options" value="14">
              14
            </option>
            <option className="options" value="13">
              13
            </option>
            <option className="options" value="12">
              12
            </option>
            <option className="options" value="11">
              11
            </option>
            <option className="options" value="10">
              10
            </option>
            <option className="options" value="09">
              09
            </option>
            <option className="options" value="08">
              08
            </option>
            <option className="options" value="07">
              07
            </option>
            <option className="options" value="06">
              06
            </option>
            <option className="options" value="05">
              05
            </option>
            <option className="options" value="04">
              04
            </option>
            <option className="options" value="03">
              03
            </option>
            <option className="options" value="02">
              02
            </option>
            <option className="options" value="01">
              01
            </option>
          </select>
          <div className="relative font-shinb text-[16px]">일</div>
        </div>
        <select className="weatherArea dateArea">
          <option className="options" value="">
            날씨
          </option>
          <option className="options" value="태풍">
            태풍
          </option>
          <option className="options" value="미세먼지">
            미세먼지
          </option>
          <option className="options" value="맑음">
            맑음
          </option>
          <option className="options" value="안개">
            안개
          </option>
          <option className="options" value="구름적음">
            구름적음
          </option>
          <option className="options" value="흐림">
            흐림
          </option>
          <option className="options" value="황사">
            황사
          </option>
          <option className="options" value="천둥번개">
            천둥번개
          </option>
          <option className="options" value="소나기">
            소나기
          </option>
          <option className="options" value="비">
            비
          </option>
          <option className="options" value="구름많음">
            구름많음
          </option>
          <option className="options" value="눈">
            눈
          </option>
        </select>
      </div>
    </div>
  );
}
export default DiaryTitle;
