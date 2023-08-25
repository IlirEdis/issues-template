"use client";

import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import type { Domain } from "@/app/api/domains/route";

// import { AdvancedOptions, Options } from "@/components/AdvancedOptions";
import { useDynamicPlaceholder } from "@/lib/useDynamicPlaceholder";
import { AdvancedOptions, Options } from "./AdvancedOptions";

const textDecoder = new TextDecoder();

export default function DomainSearch() {
  const domains = useRef<Domain[]>([]);
  const [, setDomains] = useState<Domain[]>([]);

  console.log("DOMAINS CURRENT CLIENT", domains);

  const [error, setError] = useState<string>();
  const [loadingInitial, setLoadingInitial] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState<Domain>();
  const [options, setOptions] = useState<Options>({
    tlds: [],
    numberOfWords: 0,
  });

  const [showOptions, setShowOptions] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      description: "",
    },
  });

  useDynamicPlaceholder("description", watch("description").length === 0);

  const loadDomains = async (description: string) => {
    setError(undefined);

    const response = await fetch("/api/domains", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description,
        options,
      }),
    });

    if (!response.ok || response.body === null) {
      setError("Something went wrong, try again?");
      return;
    }

    // console.log("THE RESPONSE", response);

    const reader = response.body.getReader();
    let completeResponse = "";

    while (true) {
      const { value, done } = await reader.read();

      //   console.log("RESSS", value);
      if (done) {
        break;
      }

      completeResponse += textDecoder.decode(value);

      // Domains are separated by |
      for (const text of completeResponse.split("|")) {
        try {
          const newDomain = JSON.parse(text);

          if (
            !domains.current.find(({ domain }) => domain === newDomain.domain)
          ) {
            // if (domains.current.length === 0) {
            //   setTimeout(() => {
            //     const results = document.getElementById("results");
            //     if (results !== null) {
            //       window.scrollTo(0, results.offsetTop - 48);
            //     }
            //   }, 100);
            // }

            domains.current = [...domains.current, newDomain];
          }

          // This forces the component to render
          setDomains(domains.current);
        } catch {
          // Only streamed part of a chunk
        }
      }
    }

    if (domains.current.length === 0) {
      setError("No domains found, try again?");
    }
  };

  const loadInitialDomains = handleSubmit(async ({ description }) => {
    // if (domains.current.length > 0) {
    //   setTimeout(() => {
    //     const form = document.getElementById("form");
    //     if (form !== null) {
    //       window.scrollTo(0, form.offsetTop);
    //     }
    //   }, 100);
    // }
    domains.current = [];
    setLoadingInitial(true);
    await loadDomains(description);
    setLoadingInitial(false);
  });

  const loadMoreDomains = handleSubmit(async ({ description }) => {
    setLoadingMore(true);
    await loadDomains(description);
    setLoadingMore(false);
  });

  //   console.log("DOMAINSS", domains);

  return (
    <section>
      <div>
        <div className='relative'>
          <div className='mx-auto max-w-4xl  '>
            <div className='flex flex-col items-center text-center'>
              <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-display'>
                Find the{" "}
                <span className='text-primary'>perfect domain name</span> for
                your next project
              </h1>
              <p className='max-w-3xl leading-7 md:leading-8 text-gray-600 m-6'>
                Describe your project in a few words and we’ll generate a list
                of domain names for you to choose from! Find your perfect domain
                name today <strong className='font-semibold'>for free</strong>.
              </p>
            </div>
          </div>
        </div>
        <div
          id='form'
          className={`${
            domains.current.length === 0 ? "relative" : "sticky"
          } z-20`}
        >
          <form
            className='mx-auto max-w-4xl pt-5'
            onSubmit={loadInitialDomains}
          >
            <label htmlFor='description' className='sr-only'>
              Description
            </label>
            <input
              id='description'
              className='block w-full px-4 py-3 md:px-6 md:py-4 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600'
              maxLength={100}
              required
              {...register("description", {
                maxLength: 100,
                required: true,
              })}
            />
            <button
              type='submit'
              className={`flex justify-center items-center shadow-lg w-full mt-4 py-2.5 px-5 md:py-4 md:px-6 md:text-xl font-display text-white rounded-md bg-primary  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-80 ${
                error
                  ? "shadow-red-600/30 from-rose-600 to-red-600 enabled:hover:from-rose-500 enabled:hover:to-red-500 focus-visible:outline-red-600"
                  : "shadow-primary-600/30 from-primary-500 to-primary-600 enabled:hover:from-primary-400 enabled:hover:to-primary-500 focus-visible:outline-primary-600"
              }`}
              disabled={loadingInitial}
            >
              {loadingInitial && (
                // <ArrowPathIcon className="animate-spin mr-4 w-5 h-5" />
                <p>Icon here</p>
              )}
              {error ? error : "Find my perfect domain name"}
            </button>
          </form>
        </div>

        {/* <AdvancedOptions
          options={options}
          onChange={(options) => setOptions(options)}
          onClose={() => setShowOptions(false)}
        /> */}

        {domains.current.length > 0 && (
          <div id='results' className='overflow-y-auto max-h-[280px]'>
            <div className='mx-auto max-w-4xl '>
              <ul role='list' className='space-y-4 mt-4'>
                {domains.current.map((domain) => (
                  <li
                    key={domain.domain}
                    className='rounded-md bg-white px-4 py-3 md:px-6 md:py-4 shadow flex items-center'
                  >
                    <div className='flex-1 flex flex-col sm:flex-row justify-between mr-4'>
                      <span>{domain.domain}</span>
                      {domain.price !== undefined && (
                        <span className='text-gray-400 sm:text-gray-500'>
                          ${domain.price / 1000000}
                        </span>
                      )}
                    </div>
                    {domain.available ? (
                      <button
                        type='button'
                        className='-my-1 -mr-2 md:-my-2 md:-mr-4 py-2 px-4 self-stretch font-display rounded-md bg-primary text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 from-primary-500 to-primary-600 enabled:hover:from-primary-400 enabled:hover:to-primary-500 focus-visible:outline-primary-600'
                        onClick={() => {
                          setSelectedDomain(domain);
                          setShowCheckout(true);
                        }}
                      >
                        Buy
                      </button>
                    ) : (
                      <p className='text-sm text-red-600'>Not available</p>
                    )}
                  </li>
                ))}
              </ul>
              {!loadingInitial && (
                <button
                  type='button'
                  className='flex justify-center items-center w-full mt-6 py-2.5 px-5 md:py-4 md:px-6 md:text-xl font-display text-white rounded-md bg-gradient-to-br from-white/10 to-white/20 enabled:hover:from-white/20 enabled:hover:to-white/30 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offset-primary-600 focus-visible:outline-white disabled:opacity-80'
                  disabled={loadingMore}
                  onClick={loadMoreDomains}
                >
                  {loadingMore && (
                    // <ArrowPathIcon className="animate-spin mr-4 w-5 h-5" />
                    <p>Icon here</p>
                  )}
                  Generate more
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
