import React, { FC, useState } from "react";
import { Box, Header, Page, Modal, Button } from "zmp-ui";
import applause from "static/applause.mp3";
import wheel from "static/wheel.mp3";
import logo  from "../static/3T.png";

const MiniGame: FC = () => {
  const [box, setBox] = useState({ transition: "all ease-in-out 5s", transform: "rotate(90deg)" });
  const [popupVisible, setPopupVisible] = useState(false);
  const [text, setText] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const [turns, setTurns] = useState(5);
  const [isShow, setIsShow] = useState(0);
  const [navbar, setNavbar] = useState(["Chương trình", "Thể lệ tham gia", "Vòng quay may mắn"]);

  // mini game config
  const awards = ["giải 1","giải 2","giải 3","giải 4"];
  const rate = [1,1,1,97];
  const bgr = [logo,logo,logo,logo];
  let perRate: number;


  const shuffle = (array: any) => {
    let currentIndex = array.length;
    let randomIndex = 0;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  const config = ()=>{
      perRate = 100/awards.length;
      for(let i = 0; i < awards.length; i++){
        
      }

  }

  const spin = () => {
    if (turns < 1) {
      return;
    }
    setIsDisable(true);
    setTurns(turns - 1);
    new Audio(wheel).play();
    // Inisialisasi variabel

    
    let SelectedItem = "";

    // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
    // Setiap item memiliki 12.5% kemenangan kecuali item sepeda yang hanya memiliki sekitar 4% peluang untuk menang.
    // Item berupa ipad dan samsung tab tidak akan pernah menang.
    // let Sepeda = shuffle([2210]); //Kemungkinan : 33% atau 1/3
    let MagicRoaster = shuffle([1890, 2250, 2610]);
    let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
    let RiceCooker = shuffle([1810, 2170, 2530]);
    let LunchBox = shuffle([1770, 2130, 2490]);
    let Sanken = shuffle([1750, 2110, 2470]);
    let Electrolux = shuffle([1630, 1990, 2350]);
    let JblSpeaker = shuffle([1570, 1930, 2290]);
    let Samsung = shuffle([2315, 2700, 3050]);
    let Ipad = shuffle([2415, 2800, 3155]);
    let Gift = shuffle([2380, 2765, 3115]);

    // Bentuk acak
    let Hasil = shuffle([
      MagicRoaster[0],
      Sepeda[0],
      RiceCooker[0],
      LunchBox[0],
      Sanken[0],
      Electrolux[0],
      JblSpeaker[0],
      Samsung[0],
      Ipad[0],
      Gift[0]
    ]);
    // Hasil[0] = 3155000;

    // Ambil value item yang terpilih
    if (MagicRoaster.includes(Hasil[0])) SelectedItem = "Magic Roaster";
    if (Sepeda.includes(Hasil[0])) SelectedItem = "Sepeda Aviator";
    if (RiceCooker.includes(Hasil[0])) SelectedItem = "Rice Cooker Philips";
    if (LunchBox.includes(Hasil[0])) SelectedItem = "Lunch Box Lock&Lock";
    if (Sanken.includes(Hasil[0])) SelectedItem = "Air Cooler Sanken";
    if (Electrolux.includes(Hasil[0])) SelectedItem = "Electrolux Blender";
    if (JblSpeaker.includes(Hasil[0])) SelectedItem = "JBL Speaker";
    if (Samsung.includes(Hasil[0])) SelectedItem = "Samsung Tab A6";
    if (Ipad.includes(Hasil[0])) SelectedItem = "Ipad mini 4";
    if (Gift.includes(Hasil[0])) SelectedItem = "Exclusive gilt";
    // Proses
    setBox({ transition: "all ease 5s", transform: "rotate(" + Hasil[0] + "deg)" });

    setTimeout(function () {
    }, 5000);

    // Munculkan Alert
    setTimeout(() => {
      new Audio(applause).play();
      // setText("Chúc bạn may mắn lần sau!")
      setText("Bạn đã trúng giải: " + SelectedItem);
      setPopupVisible(true);
    }, 5500);
    // // Delay and set to normal state
    setTimeout(function () {
      setBox({ transition: "initial", transform: "rotate(90deg)" });
      setIsDisable(false);
    }, 7000);
  }


  return (
    <Box className="bg-white" pt={5} style={{ overflow: "hidden" }}>
      <div className="overflow-x-auto flex flex-row text-base mx-4" >
        {navbar?.map((nav, index) => (
          <div
            key={nav}
            className={"mr-4 flex-none pb-2" + (isShow === index
              ? " text-primary font-semibold border-b-2 border-primary"
              : " text-gray-500")
            }
            onClick={() => {
              setIsShow(index);
            }}
            role="button"
          >
            {nav}
          </div>
        ))}
      </div>
      <div hidden={isShow !== 2}>
        <Box className="box-game">
          <div className="mainbox" id="mainbox" >
            <div className="footer-mini-game">
              <span><b>Bạn còn {turns} lượt quay</b></span>
            </div>
            <div className="box" id="box" style={box}>
              <div className="box1">
                <span className="font span1"><b>Samsung Tab A6</b></span>
                <span className="font span2"><b>JBL Speaker</b></span>
                <span className="font span3"><b>Magic Roaster</b></span>
                <span className="font span4"><b>Sepeda Aviator</b></span>
                <span className="font span5"
                ><b>Rice Cooker <br />
                    Philips</b></span>
              </div>
              <div className="box2">
                <span className="font span1"><b>Lunch Box Lock&Lock</b></span>
                <span className="font span2"
                ><b>Air Cooler <br />
                    Sanken</b></span>
                <span className="font span3"><b>Ipad Mini 4</b></span>
                <span className="font span4"><b>Exclusive Gift</b></span>
                <span className="font span5"
                ><b>Electrolux <br />
                    Blender</b></span>
              </div>
            </div>
            <button className="spin" disabled={isDisable} onClick={() => spin()}>QUAY</button>
          </div>
        </Box>
      </div>
      <Modal
        visible={popupVisible}
        title="Kết quả"
        onClose={() => {
          setPopupVisible(false);
        }}
        description={text}
      >
        <Box p={6}>
          <Button
            onClick={() => {
              setPopupVisible(false);
            }}
            fullWidth
          >
            Xác nhận
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

const MiniGamePage: FC = () => {
  return (
    <Page className="flex flex-col">
      <Header title="Mini game" />
      <MiniGame />
    </Page>
  );
};

export default MiniGamePage;