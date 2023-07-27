const notifyBtn = document.querySelector(".notify");

const requestPermission = function () {
  if (!("Notification" in window)) {
    throw new Error("Browser doesn't support Notification");
  }
  //   console.log("Button Clicked");
  Notification.requestPermission().then((permission) => {
    const notification = new Notification("Test", {
      body: "This is a Test Notification",
      icon: "./apple-tv.png",
    });
    console.log(permission);
  });
};

notifyBtn.addEventListener("click", requestPermission);
