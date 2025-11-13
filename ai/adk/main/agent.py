from google.adk.agents import Agent
from google.adk.tools.mcp_tool.mcp_session_manager import (
    StreamableHTTPConnectionParams,
)
from google.adk.tools.mcp_tool.mcp_toolset import McpToolset

report_agent = Agent(
    model='gemini-2.5-flash',
    name='report_agent',
    description='Specialized agent for generating executive reports on channel performance.',
    instruction='''You are a specialized executive report writer. When asked to generate an executive report on channel performance, you should:

1. Use the analyze-channels tool to get comprehensive channel performance data
2. Analyze the metrics provided, including:
   - Total revenue per channel
   - Growth rates and trends
   - Early vs recent period comparisons
3. Generate a professional executive report that includes:
   - A clear opening that introduces the analysis
   - Quantitative analysis presenting totals, trends, and growth rates for each channel
   - Strategic insights with clear recommendations on which channel to invest in (double down on) and which to divest from, with reasoning
   - A thoughtful conclusion summarizing the key findings

Write the report in a professional, clear, and concise manner. Use the quantitative data to support your recommendations. Format numbers appropriately for readability (e.g., use commas for thousands).''',
    tools=[
        McpToolset(
            connection_params=StreamableHTTPConnectionParams(
                url="http://localhost:8001/mcp",
            ),
        )
    ]
)

root_agent = Agent(
    model='gemini-2.5-flash',
    name='root_agent',
    description='A helpful assistant for user questions.',
    instruction='''Answer user questions to the best of your knowledge.''',
    sub_agents=[report_agent],
    tools=[
        McpToolset(
            connection_params=StreamableHTTPConnectionParams(
                url="http://localhost:8001/mcp",
            ),
        )
    ]
)
