// import {
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   GridItem,
//   Text,
// } from "@chakra-ui/react";
// import type { Path, FieldError, Control } from "react-hook-form";
// import { Controller } from "react-hook-form";
// import DatePicker, { DateObject } from "react-multi-date-picker";
// import TimePicker from "react-multi-date-picker/plugins/time_picker";

// interface FormInputProps<TFormValues extends Record<string, unknown>> {
//   name: Path<TFormValues>;
//   required?: boolean;
//   label?: string;
//   error: FieldError | undefined;
//   control: Control<TFormValues>;
//   fontSize?: string;
//   placeholder?: string;
//   min?: any;
//   max?: any;
//   disabled?: boolean;
//   defaultValue?: any;
//   disableWeekend?: boolean;
//   format?: any;
//   isTime?: boolean;
// }

// interface Size {
//   width: number | undefined;
//   height: number | undefined;
// }

// export const PrimaryDate = <TFormValues extends Record<string, any>>({
//   name,
//   label = "",
//   error,
//   control,
//   fontSize = ".8rem",
//   placeholder,
//   min,
//   max,
//   disabled,
//   defaultValue,
//   disableWeekend,
//   isTime,
//   format = "DD/MM/YYYY",
// }: FormInputProps<TFormValues>) => {
//   //
//   const size: Size = useWindowSize();
//   const isMobile = size.width != null && size.width <= 750;
//   return (
//     <FormControl
//       isInvalid={error?.type === "required" || error?.message !== undefined}
//     >
//       <FormLabel
//         htmlFor={label}
//         textTransform="capitalize"
//         width="fit-content"
//         fontSize={"18px"}
//       >
//         {label}
//       </FormLabel>
//       <Controller
//         control={control}
//         name={name}
//         rules={{ required: true }} //optional
//         render={({ field: { onChange, value } }) => (
//           <>
//             <DatePicker
//               value={defaultValue || value}
//               onChange={(date: any) => {
//                 onChange(JSON.stringify(date?.toDate?.())?.replaceAll('"', ""));
//               }}
//               format={format}
//               inputClass={"date"}
//               containerClassName="dateWrapper"
//               hideOnScroll={isMobile ? false : true}
//               placeholder={placeholder}
//               minDate={min}
//               maxDate={max}
//               disabled={disabled}
//               mapDays={({ date }) => {
//                 const isWeekend = [0, 6].includes(date.weekDay.index);

//                 if (disableWeekend && isWeekend)
//                   return {
//                     disabled: true,
//                     style: { color: "#ccc" },
//                   };
//               }}
//               disableDayPicker={isTime}
//               plugins={
//                 isTime ? [<TimePicker position="bottom" hideSeconds />] : []
//               }
//             />
//           </>
//         )}
//       />
//       <FormErrorMessage fontSize=".7rem" color="red">
//         {(error?.type === "required" && `${label} is required`) ||
//           error?.message}
//       </FormErrorMessage>
//     </FormControl>
//   );
// };
