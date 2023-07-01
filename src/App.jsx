import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Success!");
  };
  return (
    <div className="font-poppins bg-my-primary-red bg-mobile md:bg-desktop min-h-screen bg-no-repeat bg-cover pb-20 md:pb-0 md:grid md:place-items-center">
      <div className="md:max-w-6xl md:grid md:grid-cols-2">
        <section className="px-8 md:flex md:flex-col md:items-start md:justify-center">
          <h1 className="font-bold text-white text-3xl text-center mt-24 mb-8 inline-block md:leading-[3rem] md:text-5xl">
            Learn to code by <br className="hidden md:block" />
            watching others
          </h1>

          <p className="text-white/75 text-center font-semibold md:text-left">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>

        <section className="px-8">
          <div className="mt-10 md:mt-0 mb-6 relative">
            {/* Background goes here */}
            <div className="absolute inset-x-0 h-full -bottom-2 bg-zinc-900/20 rounded-lg"></div>

            {/* Text goes here */}
            <div className="relative bg-my-accent-blue text-white text-center rounded-lg leading-7 py-4 font-[300]">
              <span className="font-bold">Try it free 7 days</span> then{" "}
              <br className="md:hidden" /> $20/mo. thereafter
            </div>
          </div>

          <form
            action="#"
            className="relative"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* background goes here */}
            <div className="bg-zinc-900/20 absolute inset-x-0 -bottom-2 h-full rounded-lg"></div>

            {/* Content goes here */}
            <div className="relative bg-white p-5 md:p-10 rounded-lg">
              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder="first name"
                  autoComplete="off"
                  {...register("first_name", {
                    required: "First Name cannot be empty",
                  })}
                  autoFocus={true}
                  className={`my-input ${
                    errors.first_name && "my-border-error"
                  }`}
                />
                {errors.first_name && (
                  <>
                    <p className="my-error-message">
                      {errors.first_name?.message}
                    </p>
                    <img
                      src="./images/icon-error.svg"
                      className="absolute top-4 right-8"
                      alt="icon-error"
                    />
                  </>
                )}
              </div>

              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder="last name"
                  autoComplete="off"
                  {...register("last_name", {
                    required: "Last Name cannot be empty",
                  })}
                  className={`my-input ${
                    errors.last_name && "my-border-error"
                  }`}
                />
                {errors.last_name && (
                  <>
                    <p className="my-error-message">
                      {errors.last_name?.message}
                    </p>
                    <img
                      src="./images/icon-error.svg"
                      className="absolute top-4 right-8"
                      alt="icon-error"
                    />
                  </>
                )}
              </div>

              <div className="mb-6 relative">
                <input
                  type="text"
                  placeholder="email adress"
                  autoComplete="off"
                  {...register("email", {
                    required: "Email Adress cannot be empty",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Looks like this is not an email",
                    },
                  })}
                  className={`my-input ${errors.email && "my-border-error"}`}
                />
                {errors.email && (
                  <>
                    <p className="my-error-message">{errors.email?.message}</p>
                    <img
                      src="./images/icon-error.svg"
                      className="absolute top-4 right-8"
                      alt="icon-error"
                    />
                  </>
                )}
              </div>

              <div className="mb-6 relative">
                <input
                  type="password"
                  placeholder="password"
                  autoComplete="new-password"
                  {...register("password", {
                    required: "Password cannot be empty",
                  })}
                  className={`my-input ${errors.password && "my-border-error"}`}
                />
                {errors.password && (
                  <>
                    <p className="my-error-message">
                      {errors.password?.message}
                    </p>
                    <img
                      src="./images/icon-error.svg"
                      className="absolute top-4 right-8"
                      alt="icon-error"
                    />
                  </>
                )}
              </div>

              <button
                type="submit"
                className="text-sm relative focus:outline-none w-full hover:opacity-80 transition duration-700"
              >
                {/* background goes here */}
                <div className="absolute inset-x-0 h-full -bottom-1.5 bg-[#2da471] rounded-lg"></div>

                {/* text goes here */}
                <div className="relative font-bold uppercase tracking-widest text-white bg-my-primary-green rounded-lg py-4 px-10 transition transform duration-200 hover:translate-y-0.5 active:translate-y-1.5">
                  claim your free trial
                </div>
              </button>

              <p className="text-xs text-my-neutral-grayish-blue text-center font-semibold mt-4 leading-5 px-3">
                By clicking the button, you are agreeing to our{" "}
                <a href="#" className="text-my-primary-red">
                  Terms and Services
                </a>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default App;
