(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mock-board-project/src/app/config/api_links/links.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"auth":{"signup":"/services/supabase/auth/signup","signin":"/services/supabase/auth/signin","check_email":"/services/supabase/auth/check_email"},"storage":{"uploadfile":"/services/supabase/storage/uploadfile","retrieve":"/services/supabase/storage/retrieve","delete":"/services/supabase/storage/delete","download":"/services/supabase/storage/download"},"admin":{"retrieve_user_assign_by":"/services/supabase/admin/retrieve_user_assign_by","retrieve_all_user":"/services/supabase/admin/retrieve_all_user_student","assigned":"/services/supabase/admin/assigned","unassigned":"/services/supabase/admin/unassigned","exam_result":"/services/supabase/admin/exam_result"},"user_data":{"questionare":"/services/api/response_to_python","retrieve_mock_exam":"/services/supabase/user/retrieve_mock_exam","retrieve_mock_exam_reviewer":"/services/supabase/user/retrieve_mock_exam_reviewer","exam_result":"/services/supabase/user/exam_result","update_score":"/services/supabase/user/update_score"},"python_response":"http://127.0.0.1:10000/"});}),
"[project]/mock-board-project/src/app/components/admin_page/css/styles.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "styles-module__MiXF6W__active",
  "content": "styles-module__MiXF6W__content",
  "dashboardContainer": "styles-module__MiXF6W__dashboardContainer",
  "header": "styles-module__MiXF6W__header",
  "logo": "styles-module__MiXF6W__logo",
  "logoImage": "styles-module__MiXF6W__logoImage",
  "logoImage1": "styles-module__MiXF6W__logoImage1",
  "logoImage2": "styles-module__MiXF6W__logoImage2",
  "logoutBtn": "styles-module__MiXF6W__logoutBtn",
  "mainContent": "styles-module__MiXF6W__mainContent",
  "nav": "styles-module__MiXF6W__nav",
  "navItem": "styles-module__MiXF6W__navItem",
  "pageTitle": "styles-module__MiXF6W__pageTitle",
  "pulse": "styles-module__MiXF6W__pulse",
  "reviewerHub": "styles-module__MiXF6W__reviewerHub",
  "reviewerHubWrapper": "styles-module__MiXF6W__reviewerHubWrapper",
  "sectionTitle": "styles-module__MiXF6W__sectionTitle",
  "sidebar": "styles-module__MiXF6W__sidebar",
  "startBtn": "styles-module__MiXF6W__startBtn",
  "statNumber": "styles-module__MiXF6W__statNumber",
  "statsCard": "styles-module__MiXF6W__statsCard",
  "statsGrid": "styles-module__MiXF6W__statsGrid",
  "userEmail": "styles-module__MiXF6W__userEmail",
  "userInfo": "styles-module__MiXF6W__userInfo",
  "userName": "styles-module__MiXF6W__userName",
  "userProfile": "styles-module__MiXF6W__userProfile",
  "userSection": "styles-module__MiXF6W__userSection",
});
}),
"[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_to
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function Fetch_to(dir, payload = {}, headers = {
    "x-api-key": __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY || ""
}, retries = 3, delay = 1000 // wait time between attempts in ms
) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time truthy", 1) alert("Invalid API Directory not found");
        return {
            success: false,
            message: "Invalid API Directory"
        };
    }
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(dir, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json().catch(()=>null); // safe parse
            if (response.ok) {
                console.log("Status for fetch: ", data);
                return {
                    success: true,
                    data
                }; // success
            } else {
                console.log(data?.error);
                return {
                    success: false,
                    message: data?.error || `Request failed: ${response.status}`
                };
            }
        } catch (err) {
            let message = "Unknown fetch error";
            if (err instanceof Error) message = err.message;
            console.error(`Attempt ${attempt} fetch error:`, message);
        }
        if (attempt < retries) await new Promise((res)=>setTimeout(res, delay));
    }
    return {
        success: false,
        message: `All ${retries} attempts failed for ${dir}`
    };
}
_c = Fetch_to;
var _c;
__turbopack_context__.k.register(_c, "Fetch_to");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/components/admin_page/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/admin_page/css/styles.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AdminDashboard({ email }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [adminData, setAdminData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("adminHome");
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [examData, setExamData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const adminMenuItems = [
        {
            id: "adminHome",
            label: "Dashboard",
            dir: "/admin"
        },
        {
            id: "manageUsers",
            label: "Manage Users",
            dir: "/manage_users"
        },
        {
            id: "manageExams",
            label: "Manage Exams",
            dir: "/manage_exams"
        },
        {
            id: "examResult",
            label: "Exam Result",
            dir: "/exam_result"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            try {
                const adminStr = localStorage.getItem("admin");
                if (adminStr) {
                    setAdminData(JSON.parse(adminStr));
                }
            } catch (error) {
                console.error("Error loading admin data:", error);
            }
            const RetrieveUserData = {
                "AdminDashboard.useEffect.RetrieveUserData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].admin.retrieve_user_assign_by, {
                        email: email
                    });
                    if (response.success) {
                        setUserData(response.data.message);
                    }
                }
            }["AdminDashboard.useEffect.RetrieveUserData"];
            RetrieveUserData();
            const RetrieveData = {
                "AdminDashboard.useEffect.RetrieveData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].storage.retrieve, {
                        email: email
                    });
                    if (response.success) {
                        setData(response.data.message);
                    }
                }
            }["AdminDashboard.useEffect.RetrieveData"];
            RetrieveData();
            const RetrieveExamData = {
                "AdminDashboard.useEffect.RetrieveExamData": async ()=>{
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].admin.exam_result, {
                        email: email
                    });
                    if (response.success) {
                        setExamData(response.data.message);
                    }
                }
            }["AdminDashboard.useEffect.RetrieveExamData"];
            RetrieveExamData();
            // Detect active page
            const path = window.location.pathname;
            const currentSection = adminMenuItems.find({
                "AdminDashboard.useEffect": (item)=>item.dir === path
            }["AdminDashboard.useEffect"])?.id || "adminHome";
            setActiveSection(currentSection);
        }
    }["AdminDashboard.useEffect"], [
        email
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dashboardContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                    children: adminMenuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${activeSection === item.id ? __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                            onClick: ()=>{
                                setActiveSection(item.id);
                                router.push(item.dir);
                            },
                            children: item.label
                        }, item.id, false, {
                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userSection,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userProfile,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userName,
                                                    children: adminData.name
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                    lineNumber: 96,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userEmail,
                                                    children: adminData.email
                                                }, void 0, false, {
                                                    fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                        onClick: async ()=>{
                                            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/services/jwt/deauth");
                                            if (response.success) {
                                                alert("Successfully");
                                                router.push('/login');
                                            } else {
                                                alert("Something Went Wrong");
                                            }
                                        },
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Admin Dashboard Overview"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Total Users"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                                children: [
                                                    " ",
                                                    userData ? userData.length : 0,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Mock Exams Created"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                                children: [
                                                    " ",
                                                    data ? data.length : 0,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statsCard,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Completed Exam Sessions"
                                            }, void 0, false, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statNumber,
                                                children: [
                                                    " ",
                                                    examData ? examData.length : 0,
                                                    " "
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewerHubWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviewerHub,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "Admin Control Center"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Manage users, exams, results, and system settings."
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$css$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].startBtn,
                                            onClick: ()=>router.push("/manage_users"),
                                            children: "Manage Users"
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/components/admin_page/index.jsx",
        lineNumber: 65,
        columnNumber: 7
    }, this);
}
_s(AdminDashboard, "AHKP8MMCUZiDAEop/ZPfYKZiQ2I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/salt/encrypt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hashPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-client] (ecmascript)");
;
async function hashPassword(password) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/salt/verify.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-client] (ecmascript)");
;
async function verifyPassword(plainPassword, hashedPassword) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].compare(plainPassword, hashedPassword);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SweetAlert2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/sweetalert2@11.26.4/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
function SweetAlert2(title, text, icon, showConfirmButton = true, ok, showCancelButton = false, cancel, showLoading = false) {
    const isProcess = icon === 'process';
    // Detect dark mode
    // const isDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
        title,
        text,
        icon: isProcess ? undefined : icon,
        showConfirmButton: showConfirmButton && !showLoading,
        showCancelButton,
        confirmButtonText: ok,
        cancelButtonText: cancel,
        allowOutsideClick: false,
        background: '#1A54B8',
        color: '#fff',
        didOpen: ()=>{
            if (showLoading || isProcess) {
                __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].showLoading();
            }
        }
    });
}
_c = SweetAlert2;
var _c;
__turbopack_context__.k.register(_c, "SweetAlert2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_toFile
]);
async function Fetch_toFile(dir, file, fields = {}, headers = {}, retries = 3, delay = 1000) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time truthy", 1) alert("Invalid API Directory not found");
        return {
            success: false,
            message: "Invalid API Directory"
        };
    }
    if (!file) {
        return {
            success: false,
            message: "No file provided"
        };
    }
    // Build multipart form
    const formData = new FormData();
    formData.append("file", file);
    for(const key in fields){
        formData.append(key, String(fields[key]));
    }
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(dir, {
                method: "POST",
                headers: {
                    ...headers
                },
                body: formData
            });
            const data = await response.json().catch(()=>null);
            if (response.ok) {
                console.log("Status for file upload:", data);
                return {
                    success: true,
                    data
                };
            } else {
                console.log(data?.error);
                return {
                    success: false,
                    message: data?.error || `Request failed: ${response.status}`
                };
            }
        } catch (err) {
            let message = "Unknown fetch error";
            if (err instanceof Error) message = err.message;
            console.error(`Attempt ${attempt} fetch error:`, message);
        }
        if (attempt < retries) await new Promise((res)=>setTimeout(res, delay));
    }
    return {
        success: false,
        message: `All ${retries} attempts failed for ${dir}`
    };
}
_c = Fetch_toFile;
var _c;
__turbopack_context__.k.register(_c, "Fetch_toFile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_to
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function Fetch_to(dir, payload = {}, headers = {
    "x-api-key": __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY || ""
}, retries = 3, delay = 1000, expectBlob = false // <-- new flag
) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time truthy", 1) alert("Invalid API Directory not found");
        return {
            success: false,
            message: "Invalid API Directory"
        };
    }
    for(let attempt = 1; attempt <= retries; attempt++){
        try {
            const response = await fetch(dir, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...headers
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                const errText = await response.text();
                return {
                    success: false,
                    message: errText || `Request failed: ${response.status}`
                };
            }
            const data = expectBlob ? await response.blob() : await response.json().catch(()=>null);
            return {
                success: true,
                data
            };
        } catch (err) {
            let message = "Unknown fetch error";
            if (err instanceof Error) message = err.message;
            console.error(`Attempt ${attempt} fetch error:`, message);
        }
        if (attempt < retries) await new Promise((res)=>setTimeout(res, delay));
    }
    return {
        success: false,
        message: `All ${retries} attempts failed for ${dir}`
    };
}
_c = Fetch_to;
var _c;
__turbopack_context__.k.register(_c, "Fetch_to");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$salt$2f$encrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/salt/encrypt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$salt$2f$verify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/salt/verify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_toFile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fetch_to",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript)");
}),
"[project]/mock-board-project/src/app/(pages)/admin/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/components/admin_page/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-client] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function AdminPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            async function check() {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])("/services/jwt/verify");
                if (!response.success) return router.push("/");
                setEmail(response.data.message.data[0].email);
            }
            check();
        }
    }["AdminPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$components$2f$admin_page$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        email: email
    }, void 0, false, {
        fileName: "[project]/mock-board-project/src/app/(pages)/admin/page.jsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_s(AdminPage, "AmCUxgM2HlyZ6n3rFr8nBidGR9I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mock-board-project_src_app_e9299027._.js.map