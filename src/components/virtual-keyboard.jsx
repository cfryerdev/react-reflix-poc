import React, { useEffect, useState } from "react";
import { KeyEnum } from "../contexts/focus-functions";
import config from "../config/application.json";
import KeyboardLayout from "../data/keyboard_en.json";

export default () => {
   const [isHidden, setIsHidden] = useState(true);
   const [isCharsLock, setIsCharsLock] = useState(false);
   const [isCapsLock, setIsCapsLock] = useState(false);
   const [caller, setCaller] = useState(undefined);

   const bindKeyboardEvents = () => {
      if (config.hasVirtualKeyboard) {
         document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("keyup", event => {
               if (event.keyCode === KeyEnum.ENTER) {
                  setIsHidden(false);
                  setCaller(event.target);
                  event.target.innerHTML = "&nbsp;";
                  document.getElementById("vkb_a").focus();
               }
            });
         });
      }
   };

   const handleControlClick = (command) => {
      switch (command) {
         case "Done":
            caller.focus();
            setIsHidden(true);
            setCaller(undefined);
            break;
         case "Space":
            setOriginText(" ", false);
            break;
         case "Delete":
               setOriginText(caller.innerHTML.substring(
                  0, caller.innerHTML.length - 1
               ), true);
            break;
         case "Chars":
               toggleCharsLock();
               break;
         case "Shift":
               toggleCapsLock();
               break;
         default:
            break;
      }
   };

   const handleKeyboardClick = (key) => {
      if (key !== "") {
         setOriginText(key, false);
      }
   };

   const setOriginText = (text, replaceText) => {
      if (caller) {
         replaceText ? (caller.innerHTML = text) : (caller.innerHTML += text);
      }
   };

   const toggleCapsLock = () => {
      setIsCapsLock(!isCapsLock);
      setIsCharsLock(false);
   };

   const toggleCharsLock = () => {
      setIsCharsLock(!isCharsLock);
      setIsCapsLock(false);
   };

   useEffect(() => {
      bindKeyboardEvents();
   }, []);

   return (
      <div className={`keyboard ${ isHidden ? 'keyboard--hidden' : '' }`}>
         {
            KeyboardLayout.default.map((row, ri) => {
               return <div key={ri} className="focus-group text-center">
                     { row.map((key, ki) => { 
                           const determineButtonState = function() {
                              if (isCapsLock) {
                                 return KeyboardLayout.shiftKeys[ri][ki];
                              }
                              if (isCharsLock) {
                                 return KeyboardLayout.charKeys[ri][ki];
                              }
                              return key;
                           };
                           return <button 
                                      id={`vkb_${key}`}
                                      key={`${ri}_${ki}`}
                                      onClick={() => handleKeyboardClick(key) }
                                      default={key}
                                      shift={KeyboardLayout.shiftKeys[ri][ki]}
                                      char={KeyboardLayout.charKeys[ri][ki]}
                                      className="focus-item keyboard__key"
                                  >{determineButtonState()}</button>
                        })
                     }
                  </div>
            })
         }
         <div className="focus-group text-center">
         {
            KeyboardLayout.controls.map((key, ki) => {
               const hasToggleEnabled = function(key) {
                  return key.isToggle ? "keyboard__key--activatable" : ""
               }
               const hasLockEnabled = function(key) {
                  if (key.command === "Shift" && isCapsLock) {
                     return "keyboard__key--active";
                  }
                  if (key.command === "Chars" && isCharsLock) {
                     return "keyboard__key--active";
                  }
                  return "";
               }
               return  <button 
                           key={ki}
                           onClick={() => handleControlClick(key.command) }
                           className={`focus-item keyboard__key keyboard__key--wide ${hasToggleEnabled(key)} ${hasLockEnabled(key)}` }
                       >{key.icon ? <i className={key.icon}></i> : key.command }</button>
            })
         }
         </div>
      </div>
   )
}
