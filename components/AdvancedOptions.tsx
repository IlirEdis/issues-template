import { useId, useState } from "react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
// import { Combobox, RadioGroup } from "@headlessui/react";
// import newGithubIssueUrl from "new-github-issue-url";
import { tlds } from "@/lib/tlds";

export type Options = {
  tlds: string[];
  numberOfWords: 0 | 1 | 2 | 3 | 4;
};

type AdvancedOptionsProperties = {
  options: Options;
  onChange: (options: Options) => void;
  onClose: () => void;
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function AdvancedOptions({
  options,
  onChange,
  onClose,
}: AdvancedOptionsProperties) {
  const suggestionId = useId();
  const [query, setQuery] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const filteredTlds = (
    query === ""
      ? tlds
      : tlds.filter((tld) => {
          return tld.toLowerCase().includes(query.toLowerCase());
        })
  ).sort();

  return <div>sdlkfjdsklfj</div>;
}
