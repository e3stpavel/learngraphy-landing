import { Splitter } from '@ark-ui/solid'
import type { Component } from 'solid-js'

interface ImageComparisonProps {
  leftImage?: HTMLImageElement
  rightImage?: HTMLImageElement
}

export const ImageComparison: Component<ImageComparisonProps> = (props) => {
  return (
    <Splitter.Root
    class="gap-3"
      size={[
        { id: 'iPhone7', size: 50, maxSize: 65 },
        { id: 'iPhone14Pro', size: 50, maxSize: 65 },
      ]}
    >
      <Splitter.Panel id="iPhone7" class="rounded-2xl brightness-80">
        { props.leftImage }
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="iPhone7:iPhone14Pro" class="min-w-2 my-8 bg-warm-gray-700 rounded-full" />
      <Splitter.Panel id="iPhone14Pro" class="rounded-2xl brightness-80 flex justify-end">
      { props.rightImage }
      </Splitter.Panel>
    </Splitter.Root>
  )
}
