// import { describe } from "node:test";
import Application  from "./application";
import { render, screen } from "@testing-library/react";


describe('Application', ()=>{
    test("render corectly", ()=>{

        render(<Application/>)

        const pageHeading = screen.getByRole('heading', {
            // name:"Job application form"
            level:1
        })

        const pageHeading2 = screen.getByRole('heading', {
            // name:"Section 1"
            level:2
        })
        expect(pageHeading).toBeInTheDocument()


        const nameEle = screen.getByRole('textbox', {
            name:"Name"
        })
        expect(nameEle).toBeInTheDocument()


        const nameEle1 = screen.getByPlaceholderText('Fullname')
        expect(nameEle1).toBeInTheDocument()



        const bioEle = screen.getByRole('textbox', {
            name:"Bio"
        })
        expect(bioEle).toBeInTheDocument()

        

        const jobLocationEle = screen.getByRole('combobox')
        expect(jobLocationEle).toBeInTheDocument()

        const termsEle = screen.getByRole('checkbox')
        expect(termsEle).toBeInTheDocument()

        const submitButtonEle = screen.getByRole('button')
        expect(submitButtonEle).toBeInTheDocument()

    })

})