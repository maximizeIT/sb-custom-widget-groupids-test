import React from "react"
import {screen, render} from "@testing-library/react"

import {GroupidsTest} from "./groupids-test";

describe("GroupidsTest", () => {
    it("should render the component", () => {
        render(<GroupidsTest contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
