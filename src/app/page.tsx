'use client';
import { useState } from 'react';
import { useCompletion } from 'ai/react';
import { Trash2, Stars } from 'lucide-react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-sql';
import 'prismjs/themes/prism-dark.css';

export default function Home() {
  const [code, setCode] = useState('');
  const { completion, handleSubmit, input, handleInputChange } = useCompletion({
    api: '/api/generate-sql',
    body: {
      schema: code,
    },
  });
  const response = completion;
  return (
    <div className="max-w-[430px] mx-auto pt-12 pb-4 px-8">
      <header className="flex items-center justify-between">
        <svg
          width="118"
          height="27"
          viewBox="0 0 118 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.97247 1.81415C3.94134 1.81415 0 4.16838 0 7.17337V16.3606C0 19.3656 3.94134 21.7198 8.97247 21.7198C14.0036 21.7198 17.9449 19.3656 17.9449 16.3606V7.17337C17.9449 4.16838 14.0036 1.81415 8.97247 1.81415ZM16.4495 11.767C16.4495 12.6876 15.713 13.6264 14.4298 14.3432C12.9848 15.15 11.0464 15.595 8.97247 15.595C6.89852 15.595 4.96009 15.15 3.51515 14.3432C2.2319 13.6264 1.49541 12.6876 1.49541 11.767V10.1745C3.08989 11.61 5.81622 12.5326 8.97247 12.5326C12.1287 12.5326 14.855 11.6062 16.4495 10.1745V11.767ZM3.51515 4.59712C4.96009 3.79036 6.89852 3.34535 8.97247 3.34535C11.0464 3.34535 12.9848 3.79036 14.4298 4.59712C15.713 5.31391 16.4495 6.25273 16.4495 7.17337C16.4495 8.09401 15.713 9.03283 14.4298 9.74963C12.9848 10.5564 11.0464 11.0014 8.97247 11.0014C6.89852 11.0014 4.96009 10.5564 3.51515 9.74963C2.2319 9.03283 1.49541 8.09401 1.49541 7.17337C1.49541 6.25273 2.2319 5.31391 3.51515 4.59712ZM14.4298 18.9369C12.9848 19.7436 11.0464 20.1886 8.97247 20.1886C6.89852 20.1886 4.96009 19.7436 3.51515 18.9369C2.2319 18.2201 1.49541 17.2812 1.49541 16.3606V14.7682C3.08989 16.2037 5.81622 17.1262 8.97247 17.1262C12.1287 17.1262 14.855 16.1998 16.4495 14.7682V16.3606C16.4495 17.2812 15.713 18.2201 14.4298 18.9369Z"
            fill="#2DFF0B"
          />
          <path
            d="M35.9019 16.1526C35.9019 17.8086 35.9837 19.5312 36.1473 21.3204L34.2354 21.4702L33.9124 19.7351C32.8186 20.5839 31.3717 21.1748 29.5717 21.5076C28.9861 21.6158 28.465 21.6699 28.0086 21.6699C27.5521 21.6699 27.1473 21.6491 26.7942 21.6075C26.4497 21.5659 26.1138 21.4868 25.7866 21.3703C25.4679 21.2455 25.1708 21.0749 24.8952 20.8585C24.6196 20.6422 24.3784 20.3551 24.1717 19.9972C23.7325 19.2399 23.5129 18.3329 23.5129 17.276C23.5129 16.2108 23.5904 15.387 23.7454 14.8044C23.9091 14.2136 24.176 13.7226 24.5464 13.3315C25.2784 12.5576 26.51 12.1706 28.2411 12.1706C29.9722 12.1706 31.8196 12.4868 33.7832 13.1193V11.4965C33.7832 9.69071 33.0124 8.62136 31.4708 8.28849C30.9713 8.18031 30.3985 8.12621 29.7526 8.12621C28.2799 8.12621 26.7512 8.40915 25.1665 8.97504L24.6885 7.17753C25.1277 6.89459 26.2473 6.64078 28.0473 6.41609C28.6158 6.34951 29.2961 6.31623 30.0885 6.31623C30.8894 6.31623 31.6732 6.40777 32.4397 6.59085C33.2062 6.77393 33.8435 7.07351 34.3516 7.4896C35.3851 8.31345 35.9019 9.6491 35.9019 11.4965V16.1526ZM33.7315 14.6796C31.7162 14.1886 29.8559 13.9431 28.1507 13.9431C27.1 13.9431 26.4024 14.2344 26.0579 14.8169C25.8253 15.2247 25.7091 15.828 25.7091 16.6269C25.7091 17.4258 25.7521 18.0042 25.8382 18.362C25.933 18.7198 26.0837 19.0153 26.2904 19.2483C26.6952 19.6893 27.3626 19.9098 28.2928 19.9098C29.7483 19.9098 31.1909 19.5479 32.6205 18.8239C33.0598 18.6075 33.456 18.3662 33.8091 18.0999C33.7574 17.2011 33.7315 16.061 33.7315 14.6796Z"
            fill="#2DFF0B"
          />
          <path
            d="M41.7799 18.4743C43.554 19.4313 45.3368 19.9098 47.1282 19.9098C48.6182 19.9098 49.4923 19.3981 49.7507 18.3745C49.8368 18.025 49.8799 17.6006 49.8799 17.1012C49.8799 16.5936 49.8196 16.2025 49.699 15.9279C49.5784 15.6449 49.3761 15.4369 49.0918 15.3037C48.8076 15.1623 48.4287 15.0583 47.955 14.9917C47.4899 14.9251 46.8957 14.8336 46.1722 14.7171C45.4488 14.5922 44.7856 14.4549 44.1827 14.3051C43.5799 14.1553 43.0674 13.939 42.6454 13.656C41.7497 13.0485 41.3191 12.025 41.3536 10.5853V10.2732C41.3536 8.75867 41.8703 7.681 42.9038 7.04022C43.9028 6.40777 45.5521 6.1914 47.8517 6.39112C49.4191 6.53259 50.6679 6.79473 51.5981 7.17753L50.9909 9.06241C49.9574 8.638 48.7172 8.3301 47.2703 8.1387C46.8225 8.08044 46.4005 8.05132 46.0043 8.05132C45.6167 8.05132 45.2636 8.08044 44.945 8.1387C44.6263 8.19695 44.3593 8.30513 44.144 8.46325C43.7306 8.7878 43.5153 9.39112 43.4981 10.2732C43.4722 11.3135 43.7737 11.975 44.4024 12.258C45.0052 12.5326 45.7201 12.724 46.5469 12.8322C47.3737 12.932 48.0497 13.0236 48.5751 13.1068C49.1005 13.1817 49.5784 13.2857 50.0091 13.4189C50.4397 13.552 50.81 13.7642 51.1201 14.0555C51.766 14.6463 52.0804 15.6741 52.0631 17.1387C52.0201 19.6935 50.9177 21.1498 48.756 21.5076C48.1014 21.6158 47.4469 21.6699 46.7923 21.6699C46.1378 21.6699 45.5349 21.6283 44.9837 21.5451C44.4411 21.4702 43.9201 21.362 43.4205 21.2205C42.4732 20.9626 41.6162 20.6214 40.8497 20.1969L41.7799 18.4743Z"
            fill="#2DFF0B"
          />
          <path
            d="M57.1402 0.224688L59.2847 0V12.8821C59.6292 12.9487 60.0426 12.7781 60.5249 12.3703C61.0158 11.9626 61.4507 11.5756 61.8296 11.2094C62.2086 10.835 62.6005 10.4272 63.0052 9.98613C64.4607 8.36339 65.4167 7.2233 65.8732 6.56588H68.4311C68.2416 6.98197 67.8067 7.57282 67.1263 8.33842L65.3952 10.2233C64.4564 11.1969 63.7029 11.9168 63.1344 12.3828C62.5746 12.8488 62.2043 13.1151 62.0234 13.1817V13.3065L62.411 13.4938C62.9708 13.7517 63.7029 14.4383 64.6072 15.5534L69.4258 21.4202H66.7129L63.4316 17.2635C61.9158 15.3495 60.7574 14.3592 59.9564 14.2927L59.6722 14.2677C59.5861 14.2594 59.5086 14.2594 59.4397 14.2677C59.3708 14.2677 59.3191 14.2677 59.2847 14.2677V21.4202H57.1402V0.224688Z"
            fill="#2DFF0B"
          />
          <path
            d="M71.6478 18.4119C73.6029 19.4105 75.5148 19.9098 77.3837 19.9098C79.5541 19.9098 80.8244 19.2399 81.1947 17.9001C81.3153 17.4591 81.3756 16.9515 81.3756 16.3773V15.8904C81.3756 15.3079 81.3325 14.8377 81.2464 14.4799C81.1603 14.1221 80.9794 13.8308 80.7038 13.6061C80.256 13.2316 79.1966 12.9196 77.5258 12.6699C76.0359 12.4452 75.0067 12.233 74.4383 12.0333C73.8698 11.8336 73.4005 11.6172 73.0301 11.3842C72.6684 11.1429 72.3584 10.8433 72.1 10.4854C71.566 9.73648 71.299 8.70042 71.299 7.37725V7.25243C71.299 4.50624 72.4789 2.86269 74.8387 2.32178C75.588 2.15534 76.4363 2.07212 77.3837 2.07212H77.5517C79.7651 2.07212 81.5737 2.38003 82.9775 2.99584L82.3057 4.90569C80.6091 4.19834 79.0459 3.84466 77.6163 3.84466H77.5C75.9239 3.84466 74.8388 4.13176 74.2445 4.70596C73.745 5.18863 73.4952 6.02497 73.4952 7.21498V7.26491C73.4952 8.62136 73.8828 9.51179 74.6579 9.9362C75.1832 10.2108 76.122 10.4522 77.4742 10.6602C78.8349 10.8682 79.8469 11.0472 80.51 11.1969C81.1732 11.3384 81.7373 11.5756 82.2024 11.9085C83.167 12.6075 83.6493 13.9348 83.6493 15.8904V16.0527C83.6493 19.0402 82.4048 20.8211 79.9158 21.3953C79.1493 21.5784 78.4258 21.6699 77.7455 21.6699C77.0651 21.6699 76.445 21.6449 75.8852 21.595C75.334 21.5534 74.7698 21.4743 74.1928 21.3578C72.8407 21.0915 71.7081 20.6921 70.7952 20.1595L71.6478 18.4119Z"
            fill="#2DFF0B"
          />
          <path
            d="M95.7411 21.6574L95.4699 21.6699H94.6689C91.6029 21.6699 89.5789 20.7379 88.5971 18.8738C88.0201 17.792 87.6799 16.3481 87.5765 14.5423C87.5335 13.6935 87.512 12.7698 87.512 11.7712C87.512 10.7725 87.5421 9.82802 87.6024 8.93759C87.6627 8.03884 87.7789 7.22746 87.9512 6.50347C88.132 5.77947 88.3818 5.14286 88.7005 4.59362C89.0277 4.03606 89.4541 3.57004 89.9794 3.19556C91.0646 2.4466 92.6277 2.07212 94.6689 2.07212H95.4699C98.6651 2.07212 100.711 2.9043 101.606 4.56866C102.166 5.60888 102.48 7.05687 102.549 8.91262C102.584 9.8197 102.601 10.8599 102.601 12.0333C102.601 13.1983 102.549 14.3218 102.446 15.4036C102.351 16.4854 102.132 17.4466 101.787 18.2871C101.046 20.068 99.6167 21.1415 97.4981 21.5076C98.523 22.706 99.9569 23.9792 101.8 25.3273L100.159 27C98.0493 25.2774 96.5766 23.4965 95.7411 21.6574ZM95.444 19.8724C96.3914 19.8724 97.1751 19.7725 97.7952 19.5728C98.4239 19.3731 98.9191 19.0236 99.2809 18.5243C99.9526 17.6006 100.289 15.828 100.289 13.2067V11.8585C100.289 10.6019 100.254 9.48266 100.185 8.50069C100.116 7.51872 99.9311 6.69071 99.6297 6.01664C99.0096 4.61859 97.666 3.91956 95.599 3.91956H94.5139C92.4124 3.91956 91.0689 4.57282 90.4832 5.87933C90.1129 6.71151 89.9105 7.69348 89.8761 8.82524C89.8416 9.957 89.8244 10.9681 89.8244 11.8585V13.2067C89.8244 15.6616 90.2033 17.3925 90.9612 18.3994C91.6933 19.3814 92.9292 19.8724 94.6689 19.8724H95.444Z"
            fill="#2DFF0B"
          />
          <path
            d="M107.975 2.32178H110.171V19.5853H118V21.4202H107.975V2.32178Z"
            fill="#2DFF0B"
          />
        </svg>
        <button type="button">
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={1} />
        </button>
      </header>
      <form
        className="py-8 w-full flex flex-col text-foam"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label className="text-lg font-light" htmlFor="schema">
          Cole seu código SQL aqui:
        </label>
        <Editor
          textareaId="schema"
          textareaClassName="outline-none"
          className="my-4 h-40 font-mono bg-blueberry-600 border border-blueberry-300 rounded-md focus-within:ring-2 focus-within:ring-lime-500"
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.sql, 'sql')}
          padding={16}
        />

        <label className="text-lg font-light" htmlFor="question">
          Faça uma pergunta
        </label>
        <textarea
          className="w-full my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
          name="question"
          id="question"
          value={input}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="text-pistachio flex items-center justify-center rounded-lg border border-pistachio h-14 gap-2"
        >
          <Stars className="w-6 h-6" />
          Submeter sua solicitação
        </button>
      </form>
      <div className="">
        <span className="text-lg font-light text-foam">
          Retorno da requisição
        </span>
        <textarea
          readOnly={true}
          className="w-full h-40 my-4 bg-transparent text-gum-50 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-2 focus:ring-lime-500"
          name="response"
          id="response"
          value={response}
        />
      </div>
    </div>
  );
}
