export default function Contact() {
  return (
    <div className="h-full flex flex-col justify-center">
      <div className="text-[90px] flex justify-center items-center">
        <div>
        Contact
        </div>
      </div>
      <div className="flex justify-start ">
        <div className="text-sm xl:text-xl 2xl:text-4xl w-full">
          <ul className="flex flex-col gap-10 items-stat">
            <li
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              }}
            >
              📧Email :{" "}
              <a href="mailto:chitsanucha.onri@gmail.com">
                chitsanucha.onri@gmail.com
              </a>
            </li>
            <li
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              }}
            >
              📱Mobile telephone : +66-82-138-2994
            </li>
            <li
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              }}
            >
              🐙Github :{" "}
              <a
                href="https://github.com/Ch1tsanucha"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Ch1tsanucha
              </a>
            </li>
            <li
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              }}
            >
              💼Linkedin :{" "}
              <a
                href="https://www.linkedin.com/in/chitsanucha-onrit-5391a0314/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ch1tsanucha
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
