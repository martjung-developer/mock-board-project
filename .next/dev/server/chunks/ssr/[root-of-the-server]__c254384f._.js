module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_to
]);
async function Fetch_to(dir, payload = {}, headers = {
    "x-api-key": process.env.API_KEY || ""
}, retries = 3, delay = 1000 // wait time between attempts in ms
) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/mock-board-project/src/app/utilities/salt/encrypt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>hashPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-ssr] (ecmascript)");
;
async function hashPassword(password) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
}
}),
"[project]/mock-board-project/src/app/utilities/salt/verify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/bcryptjs@3.0.3/node_modules/bcryptjs/index.js [app-ssr] (ecmascript)");
;
async function verifyPassword(plainPassword, hashedPassword) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$bcryptjs$40$3$2e$0$2e$3$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].compare(plainPassword, hashedPassword);
}
}),
"[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SweetAlert2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/sweetalert2@11.26.4/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
;
function SweetAlert2(title, text, icon, showConfirmButton = true, ok, showCancelButton = false, cancel, showLoading = false) {
    const isProcess = icon === 'process';
    // Detect dark mode
    // const isDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
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
                __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$sweetalert2$40$11$2e$26$2e$4$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].showLoading();
            }
        }
    });
}
}),
"[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_toFile
]);
async function Fetch_toFile(dir, file, fields = {}, headers = {}, retries = 3, delay = 1000) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
}),
"[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetch_to
]);
async function Fetch_to(dir, payload = {}, headers = {
    "x-api-key": process.env.API_KEY || ""
}, retries = 3, delay = 1000, expectBlob = false // <-- new flag
) {
    if (!dir || dir === "") {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
}),
"[project]/mock-board-project/src/app/utilities/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$salt$2f$encrypt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/salt/encrypt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$salt$2f$verify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/salt/verify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$SweetAlert2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/SweetAlert2.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_toFile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_toFile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_download.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-ssr] (ecmascript) <export default as Fetch_to>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fetch_to",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-ssr] (ecmascript)");
}),
"[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/styles.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "answered": "styles-module__DvXEza__answered",
  "card": "styles-module__DvXEza__card",
  "choice": "styles-module__DvXEza__choice",
  "choices": "styles-module__DvXEza__choices",
  "controlBtn": "styles-module__DvXEza__controlBtn",
  "controls": "styles-module__DvXEza__controls",
  "fadeIn": "styles-module__DvXEza__fadeIn",
  "missed": "styles-module__DvXEza__missed",
  "pulse": "styles-module__DvXEza__pulse",
  "qNumber": "styles-module__DvXEza__qNumber",
  "qText": "styles-module__DvXEza__qText",
  "questionBlock": "styles-module__DvXEza__questionBlock",
  "quizContainer": "styles-module__DvXEza__quizContainer",
  "quizTitle": "styles-module__DvXEza__quizTitle",
  "resultCard": "styles-module__DvXEza__resultCard",
  "summary": "styles-module__DvXEza__summary",
  "summaryA": "styles-module__DvXEza__summaryA",
  "summaryItem": "styles-module__DvXEza__summaryItem",
  "summaryQ": "styles-module__DvXEza__summaryQ",
  "timer": "styles-module__DvXEza__timer",
});
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/mock-board-project/src/app/config/api_links/links.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"auth":{"signup":"/services/supabase/auth/signup","signin":"/services/supabase/auth/signin","check_email":"/services/supabase/auth/check_email"},"storage":{"uploadfile":"/services/supabase/storage/uploadfile","retrieve":"/services/supabase/storage/retrieve","delete":"/services/supabase/storage/delete","download":"/services/supabase/storage/download"},"admin":{"retrieve_user_assign_by":"/services/supabase/admin/retrieve_user_assign_by","retrieve_all_user":"/services/supabase/admin/retrieve_all_user_student","assigned":"/services/supabase/admin/assigned","unassigned":"/services/supabase/admin/unassigned","exam_result":"/services/supabase/admin/exam_result"},"user_data":{"questionare":"/services/api/response_to_python","retrieve_mock_exam":"/services/supabase/user/retrieve_mock_exam","retrieve_mock_exam_reviewer":"/services/supabase/user/retrieve_mock_exam_reviewer","exam_result":"/services/supabase/user/exam_result","update_score":"/services/supabase/user/update_score"},"python_response":"http://127.0.0.1:10000/"});}),
"[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/utilities/Fetch_to.js [app-ssr] (ecmascript) <export default as Fetch_to>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/styles.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mock-board-project/node_modules/.pnpm/next@16.0.7_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/mock-board-project/src/app/config/api_links/links.json (json)");
"use client";
;
;
;
;
;
;
function QuizPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [questionare, setQuestionare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [questionsLoaded, setQuestionsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        examinee_name: "",
        email: "",
        score: 0,
        assign_by: "",
        passing_score: 75,
        status: "",
        exam_title: "",
        parts: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function check() {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])("/services/jwt/verify");
            if (!response.success) return router.push("/");
            const email = response.data.message.data[0].email;
            const assign_by = localStorage.getItem('assign_by') || '';
            const passing_score = localStorage.getItem('passing_score');
            const exam_title = localStorage.getItem('exam_title');
            const parts = localStorage.getItem('parts');
            setData((prev)=>({
                    ...prev,
                    examinee_name: response.data.message.data[0].name,
                    email: email,
                    assign_by: assign_by,
                    exam_title: exam_title,
                    parts: parts,
                    passing_score: parseInt(passing_score)
                }));
        }
        check();
    }, []);
    const question = questionare[index];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function check() {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])("/services/jwt/verify");
            if (!response.success) return router.push("/");
            // 🚫 Prevent restart if exam already submitted
            if (localStorage.getItem('exam_submitted') === 'true') {
                alert('You have already completed this exam.');
                return router.push('/dashboard');
            }
            // 🔒 Lock exam as active
            if (!localStorage.getItem('exam_active')) {
                localStorage.setItem('exam_active', 'true');
            }
            const email = response.data.message.data[0].email;
            const assign_by = localStorage.getItem('assign_by') || '';
            const passing_score = localStorage.getItem('passing_score');
            const exam_title = localStorage.getItem('exam_title');
            const parts = localStorage.getItem('parts');
            const category = localStorage.getItem('category');
            setData((prev)=>({
                    ...prev,
                    examinee_name: response.data.message.data[0].name,
                    email,
                    assign_by,
                    exam_title,
                    parts,
                    passing_score: parseInt(passing_score),
                    category
                }));
        }
        check();
    }, []);
    // Fetch questionnaire data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchQuestions = async ()=>{
            try {
                const examId = localStorage.getItem('exam_id');
                if (!examId) {
                    console.error('No exam ID found');
                    return;
                }
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].user_data.questionare, {
                    id: examId
                });
                console.log('Question fetch response:', response);
                if (response.success) {
                    const rawData = response.data.message.data.data || [];
                    // Transform the data to match UI structure
                    const transformed = rawData.map((item)=>({
                            q: item.Question || '',
                            choices: [
                                item.A || '',
                                item.B || '',
                                item.C || '',
                                item.D || ''
                            ],
                            correctAnswer: item['Correct Answer'] || ''
                        }));
                    setQuestionare(transformed);
                    setQuestionsLoaded(true); // Mark questions as loaded
                } else {
                    const errorMsg = response.message || response.data?.error || response.error || 'Unknown error';
                    console.error('Failed to fetch questions:', errorMsg);
                    console.error('Full response object:', response);
                    alert(`Failed to load exam questions.\n\nError: ${errorMsg}\n\nPlease ensure:\n1. The exam file is uploaded to storage\n2. The Python server is running (http://127.0.0.1:10000)\n3. The exam ID is valid`);
                }
            } catch (error) {
                console.error('Error fetching questions:', error);
                alert(`An error occurred while loading the exam:\n\n${error.message}\n\nPlease check the console for more details.`);
            }
        };
        fetchQuestions();
    }, []);
    // Timer: persist end time so refresh keeps countdown - only start after questions are loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!questionsLoaded) return; // Don't start timer until questions are loaded
        const timerKey = 'quiz_timer_end';
        let endTime = null;
        try {
            endTime = localStorage.getItem(timerKey);
        } catch (e) {
            endTime = null;
        }
        if (!endTime) {
            // Get assigned time in minutes from localStorage and convert to milliseconds
            const assignedTime = localStorage.getItem('assign_time');
            const duration = assignedTime ? parseInt(assignedTime) * 60 * 1000 : 60 * 60 * 1000; // Default 1 hour if not set
            const newEnd = Date.now() + duration;
            try {
                localStorage.setItem(timerKey, String(newEnd));
            } catch (e) {}
            endTime = String(newEnd);
        }
        const endTs = Number(endTime);
        function update() {
            if (finished) return; // Stop timer if finished
            const remaining = endTs - Date.now();
            if (remaining <= 0) {
                setTimeLeft(0);
                setFinished(true);
                try {
                    localStorage.removeItem(timerKey);
                } catch (e) {}
                return;
            }
            setTimeLeft(remaining);
        }
        update();
        const intervalId = setInterval(update, 1000);
        return ()=>clearInterval(intervalId);
    }, [
        finished,
        questionsLoaded
    ]);
    function formatTime(ms) {
        if (!ms || ms <= 0) return '00:00:00';
        const total = Math.floor(ms / 1000);
        const hrs = Math.floor(total / 3600);
        const mins = Math.floor(total % 3600 / 60);
        const secs = total % 60;
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    function select(choiceIdx) {
        setAnswers((prev)=>({
                ...prev,
                [index]: choiceIdx
            }));
    }
    function next() {
        if (index < questionare.length - 1) setIndex(index + 1);
        else {
            setFinished(true);
            // Stop timer and clean up localStorage when quiz is finished
            try {
                localStorage.removeItem('quiz_timer_end');
            } catch (e) {}
        }
    }
    function prev() {
        if (index > 0) setIndex(index - 1);
    }
    // Calculate score when finished
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (finished && questionare.length > 0) {
            let correctCount = 0;
            questionare.forEach((q, i)=>{
                if (answers[i] !== undefined) {
                    const userAnswer = String.fromCharCode(97 + answers[i]).toUpperCase();
                    if (userAnswer === q.correctAnswer) {
                        correctCount++;
                    }
                }
            });
            const calculatedPassingScore = Math.ceil(questionare.length * 0.75);
            const isPassed = correctCount >= calculatedPassingScore;
            setData((prev)=>({
                    ...prev,
                    score: correctCount,
                    passing_score: calculatedPassingScore,
                    status: isPassed ? 'Passed' : 'Failed'
                }));
        }
    }, [
        finished,
        questionare,
        answers
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quizContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].quizTitle,
                children: "LLE — Library Organization & Management (Practice)"
            }, void 0, false, {
                fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timer,
                children: [
                    "Time Remaining: ",
                    formatTime(timeLeft)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            !finished ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                children: question ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].questionBlock,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].qNumber,
                                    children: [
                                        "Question ",
                                        index + 1,
                                        " / ",
                                        questionare.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].qText,
                                    children: question.q
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                            lineNumber: 232,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].choices,
                            children: question.choices?.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].choice,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: `q-${index}`,
                                            checked: answers[index] === i,
                                            onChange: ()=>select(i)
                                        }, void 0, false, {
                                            fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                            lineNumber: 239,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                String.fromCharCode(97 + i),
                                                ". ",
                                                c
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                            lineNumber: 245,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                    lineNumber: 238,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                            lineNumber: 236,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prev,
                                    disabled: index === 0,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlBtn,
                                    children: "Previous"
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                    lineNumber: 250,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: next,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlBtn,
                                    children: index < questionare.length - 1 ? 'Next' : 'Finish'
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                    lineNumber: 251,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                            lineNumber: 249,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].questionBlock,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Loading questions..."
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                        lineNumber: 256,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                    lineNumber: 255,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                lineNumber: 229,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].resultCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Review Completed"
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    (()=>{
                        const answeredCount = Object.keys(answers).length;
                        const missedIndices = questionare.map((_, i)=>i).filter((i)=>answers[i] === undefined);
                        // Calculate correct answers
                        let correctCount = 0;
                        questionare.forEach((q, i)=>{
                            if (answers[i] !== undefined) {
                                const userAnswer = String.fromCharCode(97 + answers[i]).toUpperCase();
                                if (userAnswer === q.correctAnswer) {
                                    correctCount++;
                                }
                            }
                        });
                        // Calculate passing score dynamically based on total items
                        // Passing score is 75% of total items, rounded up
                        const calculatedPassingScore = Math.ceil(questionare.length * 0.75);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '1rem',
                                        marginBottom: '20px',
                                        color: '#666'
                                    },
                                    children: [
                                        "Passing Score Required: ",
                                        calculatedPassingScore,
                                        " / ",
                                        questionare.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                    lineNumber: 289,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: [
                                        "You answered ",
                                        answeredCount,
                                        " of ",
                                        questionare.length,
                                        " questions."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                    lineNumber: 292,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginTop: 6
                                    },
                                    children: missedIndices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            marginLeft: 8
                                        },
                                        children: [
                                            "(Questions: ",
                                            missedIndices.map((n)=>n + 1).join(', '),
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                        lineNumber: 295,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                    lineNumber: 293,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true);
                    })(),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summary,
                        children: questionare.map((q, i)=>{
                            const userAnswerIdx = answers[i];
                            const userAnswer = userAnswerIdx !== undefined ? String.fromCharCode(97 + userAnswerIdx).toUpperCase() : null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summaryItem,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summaryQ,
                                        children: [
                                            i + 1,
                                            ". ",
                                            q.q
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                        lineNumber: 310,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summaryA,
                                        children: [
                                            "Your answer: ",
                                            userAnswer !== null ? String.fromCharCode(97 + userAnswerIdx) + ". " + q.choices[userAnswerIdx] : 'No answer'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                        lineNumber: 311,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                lineNumber: 309,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIndex(0);
                                    setFinished(false);
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlBtn,
                                children: "Review Answers"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: async ()=>{
                                    try {
                                        console.log('Submitting data:', data);
                                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$utilities$2f$Fetch_to$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Fetch_to$3e$__["Fetch_to"])(__TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f$config$2f$api_links$2f$links$2e$json__$28$json$29$__["default"].user_data.update_score, data);
                                        if (response.success) {
                                            localStorage.removeItem('quiz_timer_end');
                                            localStorage.removeItem('exam_id');
                                            localStorage.removeItem('assign_by');
                                            localStorage.removeItem('assign_time');
                                            localStorage.removeItem('passing_score');
                                            localStorage.removeItem('category');
                                            router.push('/dashboard');
                                        } else {
                                            alert('Failed to submit score: ' + (response.message || 'Unknown error'));
                                        }
                                    } catch (e) {
                                        console.error('Submit error:', e);
                                        alert('Error submitting score');
                                    }
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$mock$2d$board$2d$project$2f$src$2f$app$2f28$pages$292f$part_exam$2f$library$2d$organization$2f$styles$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlBtn,
                                children: "Submit Final Score"
                            }, void 0, false, {
                                fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                        lineNumber: 319,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
                lineNumber: 261,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mock-board-project/src/app/(pages)/part_exam/library-organization/page.jsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = QuizPage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c254384f._.js.map