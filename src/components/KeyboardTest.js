
import { Link } from 'react-router-dom';
import '../keyboard.css'
import React, { useState, useEffect } from 'react';

function KeyboardTest() {

  const [restart, setRestart] = useState(false);
  const [keys, setKeys] = useState([]);
  const [spaceKey, setSpaceKey] = useState(null);
  const [shiftLeft, setShiftLeft] = useState(null);
  const [shiftRight, setShiftRight] = useState(null);
  const [capsLockKey, setCapsLockKey] = useState(null);
  const [up, setUp] = useState(null);
  const [down, setDown] = useState(null);
  const [right, setRight] = useState(null);
  const [left, setLeft] = useState(null);
  const [ctrlLeft, setCtrlLeft] = useState(null);
  const [ctrlRight, setCtrlRight] = useState(null);
  const [winKey, setWinKey] = useState(null);
  const [fnKey, setFnKey] = useState(null);


  useEffect(() => {
    setKeys(document.querySelectorAll('.keys'));
    setSpaceKey(document.querySelector('.space_key'));
    setShiftLeft(document.querySelector('.shift_left'));
    setShiftRight(document.querySelector('.shift_right'));
    setCapsLockKey(document.querySelector('.caps_lock_key'));
    setUp(document.querySelector('.up_key'));
    setDown(document.querySelector('.down_key'));
    setLeft(document.querySelector('.left_key'));
    setRight(document.querySelector('.right_key'));
    setCtrlLeft(document.querySelector('.ctrl_left'));
    setCtrlRight(document.querySelector('.ctrl_right'));
    setWinKey(document.querySelector('.win_key'));
  }, []);

  useEffect(() => {
    if (keys.length > 0) {
      setRestart(false);
      for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute('keyname', keys[i].innerText);
        keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
      }
    }
  }, [keys, restart]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      for (let i = 0; i < keys.length; i++) {
        if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
          keys[i].classList.add('active');
        }
        if (e.code === 'Space') {
          spaceKey.classList.add('active');
        }
        if (e.code === 'ShiftLeft') {
          shiftRight.classList.remove('active');
        }
        if (e.code === 'ShiftRight') {
          shiftLeft.classList.remove('active');
        }
        if (e.code === 'CapsLock') {
          capsLockKey.classList.toggle('active');
          capsLockKey.classList.toggle('remove');
        }
        if (e.code === 'ArrowUp') {
          up.classList.toggle('active');
          up.classList.toggle('remove');
        }
        if (e.code === 'ArrowDown') {
          down.classList.toggle('active');
          down.classList.toggle('remove');
        }
        if (e.code === 'ArrowLeft') {
          left.classList.toggle('active');
          left.classList.toggle('remove');
        }
        if (e.code === 'ArrowRight') {
          right.classList.toggle('active');
          right.classList.toggle('remove');
        }
        if (e.code === 'ControlLeft') {
          ctrlLeft.classList.add('active');
        } if (e.code === 'ControlRight') {
          ctrlRight.classList.add('active');
        }
        if (e.code === 'MetaLeft') {
          winKey.classList.add('active');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keys, spaceKey, shiftLeft, shiftRight, capsLockKey, up, down, left, right, ctrlLeft, ctrlRight, winKey]);

  useEffect(() => {
    const handleKeyUp = (e) => {
      for (let i = 0; i < keys.length; i++) {
        if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('lowerCaseName')) {
          keys[i].classList.remove('active');
          keys[i].classList.add('remove');
        }
        if (e.code === 'Space') {
          spaceKey.classList.remove('active');
          spaceKey.classList.add('remove');

        }
        if (e.code === 'ShiftLeft') {
          shiftRight.classList.remove('active');
          shiftRight.classList.remove('remove');
        }
        if (e.code === 'ShiftRight') {
          shiftLeft.classList.remove('active')
          shiftLeft.classList.remove('remove')
        }
        if (e.code === 'ControlLeft') {
          ctrlLeft.classList.remove('active');
          ctrlLeft.classList.add('remove');
        }
        if (e.code === 'ControlRight') {
          ctrlRight.classList.remove('active');
          ctrlRight.classList.add('remove');
        }
        if (e.code === 'MetaLeft') {
          winKey.classList.remove('active');
          winKey.classList.add('remove');
        };
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keys, spaceKey, shiftLeft, shiftRight, capsLockKey, up, down, left, right, ctrlLeft, ctrlRight, winKey]);





  return (
    <>
      <div>
      <div className='logo text-4xl mt-5'>S&S</div>
        <div className="containerkeyboard">
          <div className="change_light_color">
          </div>
          <div className="keyboard_wrapp">
            <div className="keyboard_lights"></div>
            <div className="keyboard_keys">
              <div className="row">
                <div className={`keys ${restart ? 'keys' : ''}`}>`</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>1</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>2</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>3</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>4</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>5</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>6</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>7</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>8</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>9</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>0</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>-</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>=</div>
                <div className={`keys backspace_key ${restart ? 'keys' : ''}`} >Backspace</div>
              </div>
              <div className="row">
                <div className={`keys tab_key ${restart ? 'keys' : ''}`}>Tab</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>Q</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>W</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>E</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>R</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>T</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>Y</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>U</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>I</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>O</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>P</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>{"["}</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>{"]"}</div>
                <div className={`keys slash_key ${restart ? 'keys' : ''}`}>\</div>
              </div>
              <div className="row">
                <div className={`keys caps_lock_key ${restart ? 'keys' : ''}`}>Caps Lock</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>A</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>S</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>D</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>F</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>G</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>H</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>J</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>K</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>L</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>;</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>'</div>
                <div className={`keys enter_key ${restart ? 'keys enter_key' : ''}`}>Enter</div>
              </div>
              <div className="row">
                <div className={`keys shift_key shift_left ${restart ? 'keys' : ''}`}>Shift</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>Z</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>X</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>C</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>V</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>B</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>N</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>M</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>{","}</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>{"."}</div>
                <div className={`keys ${restart ? 'keys' : ''}`}>/</div>
                <div className={`keys shift_key shift_right ${restart ? 'keys' : ''}`}>Shift</div>
              </div>
              <div className="row">
                <div className={`keys key1 ctrl_key ctrl_left ${restart ? 'keys' : ''}`}>Ctrl</div>
                <div className={`keys key1 win_key ${restart ? 'keys' : ''}`}>win</div>
                <div className={`keys key1 alt_key alt_left ${restart ? 'keys' : ''}`}>Alt</div>
                <div className={`keys key1 space_key ${restart ? 'keys' : ''}`}></div>
                <div className={`keys key1 alt_key alt_right ${restart ? 'keys' : ''}`}>Alt</div>
                <div className={`keys key1 ctrl_key ctrl_right ${restart ? 'keys' : ''}`}>Ctrl</div>
                <div className={`keys left_key ${restart ? 'keys' : ''}`}>←</div>
                <div className='flex flex-col'>
                  <div className={`keys up_key ${restart ? 'keys' : ''}`}>↑</div>
                  <div className={`keys down_key ${restart ? 'keys' : ''}`}>↓</div>
                </div>
                <div className={`keys right_key ${restart ? 'keys' : ''}`}>→</div>
              </div>
            </div>
          </div>
          <div className="flex my-9 flex-row justify-center items-center">
            <button className='text-white mr-5 btnFin' onClick={(e) => {
              setRestart(true);
              e.preventDefault()
            }}>restart</button>
            <button className='text-white ml-5 btnFin'><Link to='/microPhone'>next</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default KeyboardTest;