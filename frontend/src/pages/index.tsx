import { Group, Text, rem } from "@mantine/core";
import { Dropzone, FileRejection, MIME_TYPES } from "@mantine/dropzone";
import { IconUpload, IconX, IconFilePlus } from "@tabler/icons-react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useUploadFile } from "@/functions/use-upload-file";
import { useState } from "react";

export default function MainPage() {
  const { colDefs, csv, handleOnDrop, rowData } = useUploadFile()
  const [errorMessage, setErrorMessage] = useState<FileRejection[] | null>(null);

  return (
    <div>
      <div className="space-y-2">
        <Dropzone onDrop={(files) => handleOnDrop(files[0])} onReject={(files) => setErrorMessage(files)} maxSize={5 * 1024 ** 2} accept={[MIME_TYPES.csv]}>
          <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: "none" }}>
            <Dropzone.Accept>
              <IconUpload style={{ width: rem(52), height: rem(52), color: "var(--mantine-color-blue-6)" }} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX style={{ width: rem(52), height: rem(52), color: "var(--mantine-color-red-6)" }} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconFilePlus style={{ width: rem(52), height: rem(52), color: "var(--mantine-color-dimmed)" }} stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag CSV file here or click to select
              </Text>
            </div>
          </Group>
        </Dropzone>
        {errorMessage && <Text className="mx-auto" color="red">File is too large or wrong file type</Text>}
        <div
          className="ag-theme-quartz"
          style={{ height: 500 }}
        >
          {csv ? <AgGridReact rowData={rowData} columnDefs={colDefs} pagination paginationPageSize={50} paginationPageSizeSelector={[20, 50, 100]} /> : null}
        </div>
      </div>
    </div>
  );
}
