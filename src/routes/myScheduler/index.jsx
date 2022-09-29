import "./style.scss";
import { TbVideoPlus } from "react-icons/tb";
import { RiMessage3Line } from "react-icons/ri";
import { MdOutlineNotifications } from "react-icons/md";
import { useState } from "react";

export const MyScheduler = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleNewProduct = async (e) => {
    e.preventDefault();
    const newProductObject = {
      title: title,
      description: description,
      price: price,
      image: image,
    };
    let newProduct = new FormData();
    newProduct.set("title", title);
    newProduct.set("description", description);
    newProduct.set("price", price);
    newProduct.set("image", image);
    setTimeout(() => {
      for (var value of newProduct.values()) {
        console.log(value);
      }
    }, 2000);
  };

  const Avatar = require("../../assets/images/avatar.jpg");

  return (
    <div className="dashboard__full">
      <div className="dashboard__full__left">
        <div className="dashboard__header">
          <span>
            Good morning, <b>Samantha</b> 😊
          </span>
          <button className="button" onClick={() => alert("New Course")}>
            <TbVideoPlus fontSize={20} className="icon" />
            <span>New course</span>
          </button>
        </div>
        <div className="modal">
          <span className="title">Add a new product</span>
          <form>
            <div className="inputItem">
              <label>Title:</label>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
                className="inputBox"
              />
            </div>
            <div className="inputItem">
              <label>Price:</label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                value={price}
                type="text"
                className="inputBox"
              />
            </div>
            <div className="inputItem">
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="text"
                className="inputBox"
                cols="40"
                rows="5"
              ></textarea>
            </div>
            <div className="inputItem">
              <label>Upload an image:</label>
              <input
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                className="uploadBox"
                accept="image/*"
              />
            </div>
            <div className="inputItem">
              <input
                onClick={(e) => handleNewProduct(e)}
                type="submit"
                className="submitButton"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="dashboard__full__right">
        <div className="dashboard__full__right__top">
          <div className="dashboard__full__right__top__left">
            <div className="avatar__container">
              <img
                className="avatar"
                width={40}
                height={40}
                src={Avatar}
                alt="Profile"
              />
            </div>
            <div className="profile__details">
              <span className="profile__details__name">Samantha</span>
              <span className="profile__details__role">English Teacher</span>
            </div>
          </div>
          <div className="profile__buttons">
            <button
              onClick={() => alert("Messages")}
              className="button__messages"
            >
              <RiMessage3Line size={23} />
            </button>
            <button
              onClick={() => alert("Notifications")}
              className="button__notifications"
            >
              <MdOutlineNotifications size={23} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
