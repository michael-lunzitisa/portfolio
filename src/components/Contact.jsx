const Contact = () => {
  return (
    <div className="bg-secondaryColor">
      <div>
        <form action="submit" method="post">
          <div class="flex flex-col justify-content-center items-center bg-titleColor">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              class="w-[40%] px-3 py-2 m-2 border-gray-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              class="w-[40%] px-3 py-2 m-2 border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              class="w-[40%]  h-20 px-3 py-2 m-2 border-gray-300 rounded-md"
            ></textarea>
            <button
              type="submit"
              class="w-[15%]  px-3 py-2 m-2 bg-blue-500 text-white rounded-md"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
