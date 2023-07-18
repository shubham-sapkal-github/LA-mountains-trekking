import "../tabs/tabs.css";
import Link from "@mui/material/Link";
import { useState } from "react";
import AccordianSecond from "./accordion/accordian2";
// import AccordionTabs from "./accordion/accordion";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tabs-bgimg-section">
        <div className="tab-buttons-bar">
          <div
            className="tab-buttons"
            style={{ width: "70%", marginInline: "auto" }}
          >
            <Link
              onClick={() => handleTabChange(0)}
              className={activeTab === 0 ? "active-link" : ""}
            >
              Mountain 1
            </Link>
            <Link
              onClick={() => handleTabChange(1)}
              className={activeTab === 1 ? "active-link" : ""}
            >
              Mountain 2
            </Link>
          </div>
        </div>
        {activeTab === 0 && (
          <section className="tab1-bgimg-secion">
            <div className="table-container">
              <div
                style={{
                  fontSize: "32px",
                  color: "#414f6b",
                  fontWeight: "700",
                  fontFamily: "Oswald",
                }}
              >
                SCHEDULE
              </div>
              <table class="table table-sm " className="custom-table">
                <tbody>
                  <tr>
                    <td>25 Nov 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: "15px" }}>28 Nov 2016</td>
                    <td style={{ paddingBottom: "15px" }}>
                      Vestibulum viverra
                    </td>
                  </tr>

                  <tr>
                    <td style={{ paddingBottom: "15px" }}>18 Dec 2016</td>
                    <td style={{ paddingBottom: "15px" }}>
                      Vestibulum viverra
                    </td>
                  </tr>
                  <tr>
                    <td>7 Jan 2017</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
        {activeTab === 1 && (
          <section className="tab2-bgimg-secion">
            <div className="table-container table-container2">
              <div
                style={{
                  fontSize: "32px",
                  color: "#414f6b",
                  fontWeight: "700",
                  fontFamily: "Oswald",
                }}
              >
                SCHEDULE
              </div>
              <table class="table table-sm " className="custom-table">
                <tbody>
                  <tr>
                    <td>17 Nov 2016</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                  <tr>
                    <td style={{ paddingBottom: "15px" }}>13 Dec 2016</td>
                    <td style={{ paddingBottom: "15px" }}>
                      Vestibulum viverra
                    </td>
                  </tr>

                  <tr>
                    <td style={{ paddingBottom: "15px" }}>28 Dec 2016</td>
                    <td style={{ paddingBottom: "15px" }}>
                      Vestibulum viverra
                    </td>
                  </tr>
                  <tr>
                    <td>9 Feb 2017</td>
                    <td>Vestibulum viverra</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
      {/* <AccordionTabs /> */}
      <AccordianSecond />
    </>
  );
}

export default Tabs;
