import { checkIfTodayIsHoliday, turnOnOffApp } from "./stockCordinator";

describe("A set of test cases for cordinating stock services",()=>{
    test("Trun on stock history service", () => {
        return turnOnOffApp("tvstockhistory",0).then((res)=>{
            expect(res.status).toEqual(200);
        });

    });

    test("DATE check ", ()=>{
        expect(checkIfTodayIsHoliday())
        .toEqual(true);
    })
});