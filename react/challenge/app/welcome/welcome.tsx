import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
      <div className="flex flex-col items-center">
        <h1>Challenge</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 rounded p-2 mb-4" />
      </div>
  );
}
