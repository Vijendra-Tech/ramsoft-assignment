import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import Task from "../components/Task";
import { Provider } from "react-redux";
import store from "../store/store";

describe("task Component", () => {
  test("Task component should render", () => {
    const task = render(
      <Provider store={store}>
        <Task />
      </Provider>
    );
    expect(task).toMatchSnapshot();
    task.unmount();
  });
});
